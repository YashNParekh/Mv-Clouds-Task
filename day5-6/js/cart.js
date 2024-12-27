import { db, auth ,user,uid } from './db.js'
import { get, query, ref, set , limitToFirst, remove ,onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";


let path = ref(db,`Cart/${uid}/`)
// const queryRef = query(path, limitToFirst(2)); 

let productCards = document.getElementById('product-cards');


async function checkCart(NextStep,addSelect){
    if(uid){
        console.log(uid)
        await get(path).then( async (e)=>{
            if(e.exists()){
                let data = e.val();
                productCards.innerHTML ="";
                // console.log(data)
                let length = Object.values(data).length
                Object.entries(data).map(async (item,index)=>{
                let path1 = ref(db,`Data/${item[0]}`);

                await get(path1).then((PD)=>{
                    if(PD.exists()){
                        PD = PD.val(); 
                        productCards.innerHTML+=(`
                            <div class="product-card">
                                <div class="card">
                                    <div class="img-box">
                                        <img src="${PD.imageUrl}" alt="green-tomatoes" width="80px" class="product-img">
                                    </div>

                                    <div class="detail">

                                        <h4 class="product-name">${PD.title}</h4>

                                        <div class="wrapper">

                                            <div class="product-qty">
                                                <button data-max="${PD.stock}" data-pid=${item[0]} data-category=${PD.category} id="decrement">
                                                    -
                                                </button>

                                                <span id="quantity">${item[1].count}</span>

                                                <button data-max="${PD.stock}" data-pid=${item[0]} data-category=${PD.category} id="increment">
                                                    +
                                                </button>
                                            </div>

                                            <div class="price">
                                                $<span id="price">${PD.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button data-pid=${item[0]} id="removeFromCart" class="product-close-btn">
                                        <img src="../images/delete.png" name="close-outline"></img>
                                    </button>
                                </div>
                            </div>
                            `)
                        }
                    });
                    if(length-1==index){ 
                        NextStep();
                        addSelect('All');

                    };
                })
            }else {
                productCards.innerHTML ="";
                productCards.innerHTML += `
                <div style="margin:20px;padding:10px;display:flex;flex-direction: column;gap:10px;">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <button style="border:1px solid black; background:lightgrey;border-radius: 6px;padding:20px"  onclick="window.location = 'http://127.0.0.1:5500/html/categoryShowing.html?category=All'"  >Shop Now</button>
                </div>
                `
                }
            })
            
    }   
    else{
        alert("please Login first ")
        window.location = "signIn.html";
    } 
}



let NextStep = ()=>{
    
    
    const quantityElem = document.querySelectorAll('#quantity');

    
    const payAmountBtn = document.querySelector('#payAmount');
    const decrementBtn = document.querySelectorAll('#decrement');
    const incrementBtn = document.querySelectorAll('#increment');
    const priceElem = document.querySelectorAll('#price');
    const subtotalElem = document.querySelector('#subtotal');
    const taxElem = document.querySelector('#tax');
    const totalElem = document.querySelector('#total');
    const removeFromCart = document.querySelectorAll('#removeFromCart');
    console.log(removeFromCart);
    
    console.log(quantityElem);
    
    //Adds or removes units of choosen food
    
    for(let i = 0; i < incrementBtn.length; i++){
        incrementBtn[i].addEventListener('click', function(e) {
            let increment = Number(this.previousElementSibling.textContent);
            if(increment!=e.target.dataset.max) increment++;

            let ref1 = ref(db, `Cart/${uid}/${e.target.dataset.pid}`);
            
            set(ref1, {
                        category:  e.target.dataset.category,
                        count: increment
                })
            this.previousElementSibling.textContent = increment;
            
            totalCalc();
        })
        
        decrementBtn[i].addEventListener('click', function (e) {
            let decrement = Number(this.nextElementSibling.textContent);
            decrement <= 1 ? 1 : decrement--;
            this.nextElementSibling.textContent = decrement;
            let ref1 = ref(db, `Cart/${uid}/${e.target.dataset.pid}`);
            set(ref1, {
                category:  e.target.dataset.category,
                count: decrement
            })
            totalCalc();
        })

        // alert(removeFromCart[i])
        removeFromCart[i].addEventListener('click', function () {
            // alert(this.dataset.pid)
            // alert(uid)
            let ref1 = ref(db, `Cart/${uid}/${this.dataset.pid}`);
            remove(ref1).then(
                checkCartTemp()
            ).catch((e)=>{alert(e)})
            totalCalc();
        })
        
        
    }
    
    
    let totalCalc = function(){
        const tax = 0.05;
        let subtotal = 0;
        let totalTax = 0;
        let total = 0;
        
        for(let i = 0; i < quantityElem.length; i++){
            subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
            
            subtotalElem.textContent = subtotal.toFixed(2);
            
            totalTax = subtotal * tax;
            
            taxElem.textContent = totalTax.toFixed(2);
            
            total = subtotal + totalTax;
            
            totalElem.textContent =  total.toFixed(2);
            payAmountBtn.textContent = total.toFixed(2);
        }   
        
    }

    totalCalc();   
}


document.getElementById('CreditCard').addEventListener('click',(e)=>{
    e.target.classList.add('selected')
    document.getElementById('PayPal').classList.remove('selected');
});
document.getElementById('PayPal').addEventListener('click',(e)=>{
    e.target.classList.add('selected')
    document.getElementById('CreditCard').classList.remove('selected');
})




// info: for search bar 

async function addSelect(str) {
    let selectSection = document.getElementById('innerNav')
    // alert(selectSection)
    selectSection.disabled = true
    selectSection.addEventListener('change', (e) => {
        window.location = `categoryShowing.html?category=${e.target.value}`
    })

    await get(ref(db, 'category/')).then((snapshot) => {
        if (snapshot.exists()) {
            Object.entries(snapshot.val()).map(([key, value]) => {
                if (key != str) {
                    selectSection.innerHTML += `
            <option value="${key}" id="${key}"  class="navitem">${key}</option>`
                } else {
                    selectSection.innerHTML += `<option value="${key}" id="${key}" selected  class="navitem">${key}</option>`
                }
            });
        } else {
            console.log("No data available");
        }
    })
    selectSection.disabled = false
}


let checkCartTemp = () =>{

       checkCart(NextStep,addSelect);
}
checkCartTemp();


document.getElementById('Form').addEventListener('submit',async (e)=>{
    e.preventDefault();
    await remove(ref(db,`Cart/${uid}`)).then((e)=>{alert('success')}).catch((e)=>{alert})
    window.location = 'home.html';
    
})


// onValue(path, async (e)=>{
//     productCards.innerHTML='';
//     if(e.exists()){
//         let data = e.val();
//         console.log(data)
//         let length = Object.values(data).length
//         Object.entries(data).map(async (item,index)=>{
//         let path1 = ref(db,`Data/${item[0]}`);

//         await get(path1).then((PD)=>{
//             if(PD.exists()){
//                 PD = PD.val(); 
//                 productCards.innerHTML+=(`
//                     <div class="product-card">
//                         <div class="card">
//                             <div class="img-box">
//                                 <img src="${PD.imageUrl}" alt="green-tomatoes" width="80px" class="product-img">
//                             </div>

//                             <div class="detail">

//                                 <h4 class="product-name">${PD.title}</h4>

//                                 <div class="wrapper">

//                                     <div class="product-qty">
//                                         <button data-max="${PD.stock}" data-pid=${item[0]} data-category=${PD.category} id="decrement">
//                                             -
//                                         </button>

//                                         <span id="quantity">${item[1].count}</span>

//                                         <button data-max="${PD.stock}" data-pid=${item[0]} data-category=${PD.category} id="increment">
//                                             +
//                                         </button>
//                                     </div>

//                                     <div class="price">
//                                         $<span id="price">${PD.price}</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <button data-pid=${item[0]} id="removeFromCart" class="product-close-btn">
//                                 <img src="../images/delete.png" name="close-outline"></img>
//                             </button>
//                         </div>
//                     </div>
//                     `)
//                 }
//             });
//             if(length-1==index) NextStep();
//         })
//     }else {
//         console.log('hello')
//         }
//     });
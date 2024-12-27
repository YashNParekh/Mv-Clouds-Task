import { db, auth ,user,uid } from './db.js'
import { get, query, ref, set , limitToFirst, remove ,onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";




let productCards = document.getElementById('product-cards');
let path = ref(db,`WishList/${uid}`);

async function checkCart(NextStep,addSelect){
    if(uid){
        console.log(uid)
        await get(path).then( async (e)=>{
            if(e.exists()){
                let data = e.val();
                productCards.innerHTML ="";
                console.log(data)
                let length = Object.values(data).length
                Object.entries(data).map(async (item,index)=>{
                let path1 = ref(db,`Data/${item[0]}`);
                await get(path1).then((PD)=>{
                    if(PD.exists()){
                        PD = PD.val(); 
                        
                        productCards.innerHTML+=(`
                            <div class="product-card">
                                <div class="card" >
                                    <div class="img-box">
                                        <img src="${PD.imageUrl}" alt="green-tomatoes" width="80px"  class="product-img">
                                    </div>

                                    <div class="detail" onclick="window.location='http://127.0.0.1:5500/html/productDetails.html?productId=${item[0]}&category=${PD.category}'">

                                        <h4 class="product-name">${PD.title}</h4>

                                        <div class="wrapper">


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
                <h2>Your WishList is empty</h2>
                <p>Looks like you haven't added anything to your List</p>
                <button style="border:1px solid black; background:lightgrey;border-radius: 6px;padding:10px"  onclick="window.location = 'http://127.0.0.1:5500/html/categoryShowing.html?category=All'"  >Add Now</button>
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
    
    
    const removeFromCart = document.querySelectorAll('#removeFromCart');
    console.log(removeFromCart);
    
    //Adds or removes units of choosen food
    
    for(let i = 0; i < removeFromCart.length; i++){
        // alert(removeFromCart[i])
        removeFromCart[i].addEventListener('click', function () {
            // alert(this.dataset.pid)
            // alert(uid)
            let ref1 = ref(db, `WishList/${uid}/${this.dataset.pid}`);
            remove(ref1).then(
                checkCartTemp()
            ).catch((e)=>{alert(e)})
            totalCalc();
        })
        
        
    }

}




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


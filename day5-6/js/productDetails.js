import { db, auth } from './db.js'
import { get, ref ,set ,remove} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { data } from './offlineProduct.js'

let data1 = data;
let herf1 = new String(window.location).split("?")[1].split('&')

let PID = herf1[0].split('=')[1]
let category = herf1[1].split('=')[1]
let user = localStorage.getItem('user');


// alert(PID)
// alert(category)

window.onload = async () => {

    let productDetailsContainer = document.getElementById('productDetailsContainer');
    let data;
    await get(ref(db, `Data/${category}/${PID}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            data = snapshot.val();
            productDetailsContainer.innerHTML =
                `
                <section class="section1">
                <div>
        
                    <img src="${data.imageUrl}" alt="">
                </div>
                </section>
                <section class="section2">
                    <h1 class="title">${data.title}</h1>
                    <span class="rating">
                    ${data.rating.value}⭐ <h5>( ${data.rating.count} )</h5>
                    </span>
                    <span class="productCompany">Sold By : <h3> ${data.company} </h3></span>
        
                    <span class="productDescription">
                    ${data.description}
                    </span>
                    
                    <span class="priceContainer">
                    $${data.price}
                    </span>
                    <span class="productAvailability">Availability : <h4> ${data.stock!=0  ? data.stock+"products available" : "out of stock" }  </h4></span>
                    <div class="AllButtonContainer">
                    <div class="quantityCountContainer">
                        <button class="quantityCountButton" disabled="true" value="-">-</button>
                        <span value="1" class="quantityCount">1</span>
                        <button class="quantityCountButton" value="+">+</button>
                    </div>
                    
                        <button ${data.stock==0 ? "disabled" : ""} value="AddToCartButton" class="AddToCartButton">
                        <img style="max-height: 20px;" src="../images/shopping-cart.png" alt=""> Add To Cart 
                        </button>
                    
                        <button ${data.stock==0 ? "disabled" : ""}  class="buyNowButton">
                        Buy Now
                        </button>
                    
                    <div class="wishlistButtonContainer">
                        <img class="wishlistButton" onclick="this.src='../images/heart (1).png'" value="0" src="../images/heart.png" alt="">
                    </div>
                    </div>
        
                    <span class="moreDetailsProduct">
                    ${data.about} 
                    </span>
                </section>
                `

                let category_container = document.getElementsByClassName('category-container')[0]
                category_container.innerHTML =''
                data1.map((data,index)=>{
                    category_container.innerHTML+=`
                        <div  class="category-card">
                            <img src="${data.imageUrl}" alt="Product 1">
                            <h3> ${data.title}  <br><span class="princeSpan" style="font-weight: 900;">Price : <sup  style="font-size: 10px;">$</sup> ${data.price}</span> </h3> 
                            <button class="buy-btn-add-cart"   value="${index} ${data.category}" >addToCart</button>
                            <button class="buy-btn"  value="${index} ${data.category}" >Show Product</button>
                        </div> 
                        `
                    });

            Array.from(document.getElementsByClassName('buy-btn')).forEach(element => {
                    element.addEventListener('click', (e) => {
                        let productID = e.target.value.split(' ')[0]
                        let category = e.target.value.split(' ')[1]
                        window.location = `productDetails.html?productId=${productID}&category=${category}`
                    })
                });
                Array.from(document.getElementsByClassName('buy-btn-add-cart')).forEach(element => {
                    element.addEventListener('click', (e) => {
                        if (!user){
                            alert('please login first')
                            return
                        }
                        let uid = JSON.parse(user).user.uid
                        try{
                            
                            let productID = e.target.value.split(' ')[0]
                            let category = e.target.value.split(' ')[1]
                            let ref1 =ref(db,`Cart/${uid}/${category}/${productID}`);
                            get(ref1).then((e)=>{
                                if(!e.exists()){
                                    set(ref1,{
                                        count: 1 
                                    })                    
                            }else{
                                set(ref1,{
                                    count: e.val().count+1
                                })
                            }
                        })
                        }catch(e){
                            alert('not able to add' + e)
                        }
                        alert('added to cart')
                        // alert(uid)
                        // alert(e.target.value)
                    })
                });

        } else {
            data = "No data available";
            console.log("No data available");
            productDetailsContainer.innerHTML =
                `
            ${data}
            `
        }
    });




    let quantityCountContainer = document.getElementsByClassName('quantityCountContainer')[0];
    let quantityCount = document.getElementsByClassName('quantityCount')[0];

    let quantityCountButton = document.getElementsByClassName('quantityCountButton');

    let addToCart = document.getElementsByClassName('AddToCartButton')[0];
    let buyNow = document.getElementsByClassName('buyNowButton')[0];

    let wishlistButton = document.getElementsByClassName('wishlistButton')[0];

    let uid = JSON.parse(user).user.uid
    let ref1 =ref(db,`Cart/${uid}/${category}/${PID}`);


    async function checkCart() {
        let uid = JSON.parse(user).user.uid
        let ref1 =ref(db,`Cart/${uid}/${category}/${PID}`);
                await get(ref1).then((e)=>{
                if(!e.exists()){                
                        quantityCountContainer.style.display  = 'none'
                }else{
                    // alert('hello')
                    if(e.val().count==1){
                        quantityCountButton[0].disabled = true;
                    }
                    quantityCount.textContent = e.val().count
                    quantityCountContainer.style.display  = 'flex' ;                    
                    addToCart.textContent = "Remove From Cart";
                    addToCart.value = "RemoveFromCart";
                    addToCart.classList.remove('AddToCartButton');
                    addToCart.classList.add('RemoveCartButton');
                    
                }
            }).catch((e)=>{console.log(e)})
    }

    checkCart()  


    Array.from(quantityCountButton).forEach( (e)=>{
        e.addEventListener('click',async (e)=>{
            
            if (!user){
                alert('please login first')
                return
            }

            try{
                await get(ref1).then((e1)=>{
                    if(e1.exists()){
                    // alert(e1.val().count)
                    // alert(e.target.value)
                    let value =0;
                    if (e.target.value=="+") value =  e1.val().count + 1 
                    else value =  e1.val().count - 1 

                    // alert(value)
                    if ( value <=1){
                        quantityCountButton[0].disabled = true;
                        value = 1;
                    }
                    else{
                        quantityCountButton[0].disabled = false;
                    }                    
                    set(ref1,{
                        count: value
                    })
                    quantityCount.textContent = value
                }
            })
            }catch(e){
                console.log(e)
                alert('not able to add' + e)
            }
        })
    })

    addToCart.addEventListener('click',async (e)=>{
        let target = e.target.value
        
        if(e.target.value=="RemoveFromCart"){
            alert('hello in remove')
            await remove(ref1)
            
            quantityCountButton[0].disabled = true;
            quantityCount.textContent = "1"
            quantityCountContainer.style.display  = 'none' ;                    
            addToCart.textContent = "Add To Cart";
            addToCart.value = "AddToCartButton";
            addToCart.classList.remove('RemoveCartButton');
            addToCart.classList.add('AddToCartButton'); 
            alert('completed remove')
            
        }else{
            await set(ref1,{
                count: 1 
            })
            quantityCount.textContent = "1"
                    quantityCountContainer.style.display  = 'flex' ;                    
                    addToCart.textContent = "Remove From Cart";
                    addToCart.value = "RemoveFromCart";
                    addToCart.classList.remove('AddToCartButton');
                    addToCart.classList.add('RemoveCartButton');
        }
    });

    



}
import {
    db,
    auth
} from './db.js'
import {
    ref,
    get,
    set
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import { data } from './offlineProduct.js'



let user = localStorage.getItem('user')

window.onload = () => {

    async function addSelect(str) {
        let selectSection = document.getElementById('innerNav')
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

    var href1 = new String(window.location);
    let category = href1.split('?')[1].split('=')[1]
    addSelect(href1.split('?')[1].split('=')[1])

    let category_container = document.getElementsByClassName('category-container')[0]
    category_container.innerHTML =''

    if (category!="All"){
    data.map((data,index)=>{
        if (category==data.category){
        category_container.innerHTML+=`
            <div  class="category-card">
                <img src="${data.imageUrl}" alt="Product 1">
                <h3> ${data.title} <br><span class="princeSpan" style="font-weight: 900;">Price : <sup  style="font-size: 10px;">$</sup> ${data.price}</span> </h3> 
                <button class="buy-btn-add-cart"  value="${index} ${data.category}" >addToCart</button>
                <button class="buy-btn"  value="${index} ${data.category}" >Show Product</button>
            </div> 
            `
        }
        })
    
    }else {
    data.map((data,index)=>{
        category_container.innerHTML+=`
            <div  class="category-card">
                <img src="${data.imageUrl}" alt="Product 1">
                <h3> ${data.title}  <br><span class="princeSpan" style="font-weight: 900;">Price : <sup  style="font-size: 10px;">$</sup> ${data.price}</span> </h3> 
                <button class="buy-btn-add-cart"   value="${index} ${data.category}" >addToCart</button>
                <button class="buy-btn"  value="${index} ${data.category}" >Show Product</button>
            </div> 
            `
        })
    }
    
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
}
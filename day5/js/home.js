import {
  set,
  ref,
  get,
  remove,
  onValue
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
import {
  auth,
  db
} from './db.js';




// info: this is copy from https://codepen.io/thenutz/pen/VwYeYEE
// info: i copy only js 

window.onload = () => {


  const slider = document.querySelector("#heroBannerSection");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = ((x - startX) * 35); //scroll-fast
      if (walk > 700)
          slider.scrollLeft = scrollLeft - window.innerWidth;
      else if (walk < -700)
          slider.scrollLeft = scrollLeft + window.innerWidth;
  });

  async function addThings() {
      // info: this is for category section 
      let bannerImages = document.getElementById('heroBannerSection')

      await get(ref(db, 'herobannerImage/')).then((snapshot) => {
          if (snapshot.exists()) {
              Object.entries(snapshot.val()).map(([key, value]) => {
                  bannerImages.innerHTML += `<img class="bannerImages" src="${value}" alt="1" />`
              });
          } else {
              console.log("No data available");
          }
      })



      // info: this is for category section 
      let product_card_container = document.getElementsByClassName('category-container')[0]
      let selectSection = document.getElementById('innerNav')

      selectSection.addEventListener('change', (e) => {
          window.location = `categoryShowing.html?category=${e.target.value}`
      })


      await get(ref(db, 'category/')).then((snapshot) => {
          if (snapshot.exists()) {
              Object.entries(snapshot.val()).map(([key, value]) => {
                  product_card_container.innerHTML += `
      <a href="#" class="category-card">
      <img src="${value}" alt="Product 1">
      <h3> ${key} </h3>
      <button class="buy-btn" value="${key}" >Show Products</button>
      </a>
      `

                  selectSection.innerHTML += `
      <option value="${key}" id="${key}"  class="navitem">${key}</option>
      `

              });

              Array.from(document.getElementsByClassName('buy-btn')).forEach(element => {

                  element.addEventListener('click', (e) => {
                      window.location = `categoryShowing.html?category=${e.target.value}`
                  })
              });

          } else {
              console.log("No data available");
          }
      })

  }
  addThings();
}
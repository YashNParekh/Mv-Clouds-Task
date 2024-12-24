export let data = [
    {
        "category": "Accessories",
        "title": "Brown Leather Belt",
        "price": 29.99,
        "rating": 4.5,
        "imageUrl": "https://teakwoodleathers.com/cdn/shop/products/T_BT_751_BR_1_1080x.jpg",
        "description": "A classic brown leather belt with a simple silver buckle. Perfect for everyday wear."
    },
    {
        "category": "Books",
        "title": "The Alchemist by Paulo Coelho",
        "price": 15.00,
        "rating": 4.8,
        "imageUrl": "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
        "description": "A fable about following your dreams, listening to your heart and believing in the universe. A story that will inspire you to follow your dreams and never give up."

    },
    {
        "category": "Clothing",
        "title": "White Long Sleeve Shirt",
        "price": 19.99,
        "rating": 4.2,
        "imageUrl": "https://imagescdn.thecollective.in/img/app/product/3/349050-3632796.jpg?w=500&auto=format",
        "description": "A classic white long sleeve shirt with a relaxed fit. Perfect for casual wear or layering under a jacket."

    },
    {
        "category": "Electronics",
        "title": "Sony Wireless Headphones",
        "price": 99.99,
        "rating": 4.9,
        "imageUrl": "https://m.media-amazon.com/images/I/41lArSiD5hL._AC_UF1000,1000_QL80_.jpg",
        "description": "Wireless headphones with up to 24 hours of battery life. Perfect for listening to music or taking calls on the go."

    },
    {
        "category": "game",
        "title": "The Last of Us Part II",
        "price": 39.99,
        "rating": 4.7,
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaz8wf6zJ71GBPAXj0CQz81bsAda8yiTcKhA&s",
        "description": "A post-apocalyptic game that follows the story of Ellie and Joel as they try to survive in a world infested with the Cordyceps virus."

    },
    {
        "category": "stationery",
        "title": "A5 Notebook",
        "price": 5.99,
        "rating": 4.6,
        "imageUrl": "https://picsum.photos/id/243/200/300",
        "description": "A high-quality A5 notebook with 200 pages. Perfect for writing, drawing or taking notes."

    },
    {
        "category": "Accessories",
        "title": "Silver Watch",
        "price": 49.99,
        "rating": 4.3,
        "imageUrl": "https://picsum.photos/id/242/200/300",
        "description": "A stylish silver watch with a leather strap. Perfect for dressing up or everyday wear."

    },
    {
        "category": "Books",
        "title": "The Catcher in the Rye",
        "price": 12.99,
        "rating": 4.5,
        "imageUrl": "https://picsum.photos/id/241/200/300",
        "description": "A classic coming-of-age story about Holden Caulfield, a disillusioned teenager who is struggling to find his place in the world."

    },
    {
        "category": "Clothing",
        "title": "Jeans",
        "price": 39.99,
        "rating": 4.9,
        "imageUrl": "https://picsum.photos/id/240/200/300",
        "description": "A pair of high-quality jeans with a comfortable fit. Perfect for casual wear or dressing up."

    },
    {
        "category": "Electronics",
        "title": "Apple iPhone 12",
        "price": 799.99,
        "rating": 4.8,
        "imageUrl": "https://picsum.photos/id/239/200/300",
        "description": "A high-quality smartphone with a large touchscreen display, dual cameras and a powerful processor. Perfect for taking photos, watching videos or playing games."

    },
    {
        "category": "game",
        "title": "Call of Duty: Modern Warfare",
        "price": 59.99,
        "rating": 4.6,
        "imageUrl": "https://picsum.photos/id/238/200/300",
        "description": "A first-person shooter game that takes place in a fictional world. Perfect for fans of the Call of Duty series."

    },
    {
        "category": "stationery",
        "title": "Eraser",
        "price": 2.99,
        "rating": 4.7,
        "imageUrl": "https://picsum.photos/id/237/200/300",
        "description": "A high-quality eraser that is perfect for erasing mistakes or removing unwanted marks from paper."

    },
    {
        "category": "Accessories",
        "title": "Black Leather Wallet",
        "price": 29.99,
        "rating": 4.2,
        "imageUrl": "https://picsum.photos/id/236/200/300",
        "description": "A stylish black leather wallet with multiple compartments. Perfect for storing credit cards, cash and identification."

    },
    {
        "category": "Books",
        "title": "The Handmaid's Tale by Margaret Atwood",
        "price": 19.99,
        "rating": 4.5,
        "imageUrl": "https://picsum.photos/id/235/200/300",
        "description": "A dystopian novel that takes place in a world where women have lost all their rights and are forced to be reproductive sur"
    }
]

import {db,auth} from './db.js'
import { getDatabase,get,set,ref } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

data.map((item,index)=>{
    set(ref(db,`Data/${item.category}/${index}`),item)
})

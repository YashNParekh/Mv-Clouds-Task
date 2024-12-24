
import {    
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {auth,db} from './db.js';




async function signIn(e) {
    
    e.preventDefault()

    let email =document.getElementById("email").value ;
    let password =document.getElementById("password").value


    let user = await signInWithEmailAndPassword(auth, email, password).catch((e) => {
        if (e == "FirebaseError: Firebase: Error (auth/invalid-email).") alert('email is not valid')
        else if (e == "FirebaseError: Firebase: Error (auth/missing-password).") alert('password is not valid')
        else if (e == "FirebaseError: Firebase: Error (auth/invalid-credential).") alert('password is not valid')
        else alert(e)
    });

    if (user) {
        console.log(user)
        alert('singIn success')
        localStorage.setItem('user', JSON.stringify(user))
        window.location = 'home.html'
        return true
    }
    return false
}
document.getElementById('signIn').addEventListener('submit', (e) => {
        signIn(e)
    });  


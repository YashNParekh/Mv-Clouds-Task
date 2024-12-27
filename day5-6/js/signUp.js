
import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import {auth,db} from './db.js';





async function signUp(e) {
    e.preventDefault()

    let name =document.getElementById("name").value ;
    let email =document.getElementById("email").value ;
    let password =document.getElementById("password").value
    let confirmPassword =document.getElementById("confirmPassword").value

    alert(name)
    if (password!=confirmPassword) {
        alert('password not matched ')
        return false
    }

    await createUserWithEmailAndPassword(auth, email,password).then(async (user)=>{
        alert('singUp success')
        localStorage.setItem('user', JSON.stringify(user))
        window.location = 'home.html'
        return true
    }).catch((e) => {
        if (e == "FirebaseError: Firebase: Error (auth/email-already-in-use).") alert('user already exist')
        else if (e == "FirebaseError: Firebase: Error (auth/invalid-email).") alert('email is not valid')
        else if (e == "FirebaseError: Firebase: Error (auth/missing-password).") alert('password is not valid')
        else if (e == "FirebaseError: Firebase: Error (auth/missing-password).") alert('password is not valid')
        else if (e.code == "auth/weak-password") alert('weak password')
        else alert(JSON.stringify(e))
        return false;   
    });
    


    return false


}







    document.getElementById('signUp').addEventListener('submit', (e) => {
        signUp(e)
    })
 
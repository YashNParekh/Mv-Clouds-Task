let users = [
    {
        name : 'test1',
        password : 'test1',
        email : 'test1@gmail.com',
    },
    {
        name : 'test2',
        password : 'test2',
        email : 'test2@gmail.com',
    },
    {
        name : 'test3',
        password : 'test3',
        email : 'test3@gmail.com',
    }
]

var currentUser 
if (!Boolean(localStorage.getItem('currentUser'))) {
    localStorage.setItem('currentUser','')    
    currentUser = undefined;
}
else {
    currentUser = JSON.parse(localStorage.getItem('currentUser'))
    // alert(JSON.stringify(currentUser))
}



function checkregistration(obj1) {
    if (!users.every(user => user.email != obj1.email.value)) {
        alert('user with same email is already exist')
        return false;
    }
    
    else {
        alert('here');
        currentUser = {}
        currentUser.name = obj1.name.value;
        currentUser.password = obj1.password.value;
        currentUser.email = obj1.email.value;
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
        window.location = 'confirmregtration.html'
    }

    
}


function checklogin(obj2) {
        // alert(obj2.password.value)
        // alert(obj2.email.value)
        currentUser = users.find((user)=>{
                return user.email == obj2.email.value && user.password == obj2.password.value
        })
        localStorage.setItem('currentUser',JSON.stringify(currentUser))
        if (currentUser == undefined) {
            alert("invalid data");
            return false
        }
        else window.location = 'welcomepage.html';
}


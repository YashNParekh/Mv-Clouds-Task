let users = [
    {
        name : 'test1',
        password : 'test1',
        email : 'test1@example.com',
    },
    {
        name : 'test2',
        password : 'test2',
        email : 'test2@example.com',
    },
    {
        name : 'test3',
        password : 'test3',
        email : 'test3@example.com',
    }
]


currentUser = users[0] ;



function checkregistration(obj1) {
    if (!users.every(user => user.email != obj1.email.value)) {
        alert('user with same email is already exist')
        return false;
    }
    else {
        currentUser.name = obj1.username.value;
        currentUser.password = obj1.password.value;
        currentUser.email = obj1.email.value;
    }
    window.location = 'confirmregtration.html'
    
}


function checklogin(obj2) {
        // alert(obj2.password.value)
        // alert(obj2.email.value)
        currentUser = users.find((user)=>{
                return user.email == obj2.email.value && user.password == obj2.password.value
        })
        if (currentUser == undefined) {
            alert("invalid data");
            return false
        }
        // else window.location = 'welcomepage.html';
}

let string = "qwerty"; 
let reg = /^[^Aa]{6,}$/; 
let result = string.search(reg); 
console.log(result);

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];

var trustedEmails = arr.filter(function(obj) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (emailRegex.test(obj.email)) {
        return true;
    } else {
        return false;
    }
});
console.log(trustedEmails);

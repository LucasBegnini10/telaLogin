
const arrayBd = [
    {ra: 123, password: '123'},
    {ra: 1234, password: 'HELLO123'},
    {ra: 12345, password: 'Teste'},
    {ra: 123456, password: '123456'},
]


function checkEmpty(){
    
    var ra = document.getElementById("ra").value
    var password  = document.getElementById("password").value

    if(ra == "" || password == ""){
        alert("PREENCHA TODOS OS CAMPOS")
    }
    else{
        find(ra)
    }
}

function find(ra){
    const raValidate = arrayBd.find( (e) => e.ra == ra)
    checkRa(raValidate) 
}

function checkRa(ra){
    if(ra == undefined){
        alert("ERRO, usuário não encontrado")
    }
    else{
        checkPassword(ra)
    }
}

function checkPassword(result){
    
    var password  = document.getElementById("password").value

    if(password == result.password){
       alert("Login aprovado")
    }
    else{
        alert("Senha errada")
    }
}

function seePassword(){
    const password = document.getElementById("password")

    if(password.type == "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
}




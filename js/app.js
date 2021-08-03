$(
    function(){
        $('[data-toggle="tooltip"]').tooltip();
    }
);

let btn = document.querySelector("#boton1");
btn.addEventListener("click", (e)=>{

    e.preventDefault();
    let name = document.querySelector("#name");
    let instrument = document.querySelector("#instrumento");
    let password = document.querySelector("#password");
    let alert1 = document.querySelector("#spanname1");
    let alert2 = document.querySelector("#spanname2");
    let alert3 = document.querySelector("#spanname3");
    if(name.value ==""){
        alert1.style.display = "block";
        alert2.style.display = "none";
        alert3.style.display = "none";
        return;
    }else if(!/^[a-zA-Z]*$/g.test(name.value)){
        alert1.style.display = "block";
        alert2.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(instrument.value != "Piano" && instrument.value != "piano"){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(!/^[a-zA-Z]*$/g.test(instrument.value)){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }else if(instrument.value == ""){
        alert2.style.display = "block";
        alert1.style.display = "none";
        alert3.style.display = "none";
        return;

    }
    else if(isNaN(password.value)){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
        return;

    }else if(password.value != "23132" && password.value !="54323"){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
        return;

    }else if(password.value == ""){
        alert3.style.display = "block";
        alert1.style.display = "none";
        alert2.style.display = "none";
        return;

    }

})
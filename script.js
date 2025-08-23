document.getElementById('form-btn')
        .addEventListener('click', function(event){
            event.preventDefault();
    const phoneNumValue = document.getElementById('phn-num').value;
    const phnNumConvert = parseInt(phoneNumValue);

    const passNumValue = document.getElementById('pass-num').value;
    const passNumConvert = parseInt(passNumValue)
    
    const phnNum = 1234567890;
    const passNum = 1234;

    if(phnNumConvert === phnNum && passNumConvert === passNum){
        window.location.href = "./main.html"
    }
    else{
        alert("Invalid Number or pin")
        
    }

})
const passNum = 1234;

function getInputNumber(id){
const inputFildNumber = parseInt( document.getElementById(id).value);
return inputFildNumber;
}
function getInput(id){
const inputFild = document.getElementById(id).value ;
return inputFild;
}
function getTextNumber(id){
const textFild = parseInt(document.getElementById(id).innerText) ;
return textFild;
}
function setInnerText(id, value){
const totalAmount = document.getElementById(id).innerText = value ;
return totalAmount;
}

document.getElementById("addMoney-btn").addEventListener('click', function(event){
    event.preventDefault();
   const bankName = getInput('select-bnk');
   const accountNum = getInput('bnk-num');
   const addAmount = getInputNumber('add-amount');
   const pinNum = getInputNumber('pin-num');

   const availableBalance = getTextNumber('available-balance');
   
   if(accountNum.length !== 11 || isNaN(accountNum)){
        alert("Please provide a valid Account Number");
      return;
    }
   
   if(pinNum !== passNum){
        alert("Please provide a valid Pin Number");
      return;
    }
   if(isNaN(addAmount) || addAmount <= 0){
        alert("Please provide a valid Amount");
      return;
    }
    const totalAmount = addAmount + availableBalance;

   setInnerText('available-balance',totalAmount);


})

//cash out 
document.getElementById("withdraw-btn").addEventListener('click', function(event){
  event.preventDefault();
  const agentNum = getInput('agent-num');
  const amount = getInputNumber('withdraw-amount');
  const pinNum = getInputNumber('pin-num-2');
  const availableBalance =getTextNumber('available-balance');
  
  
  if(agentNum.length !== 11 || isNaN(agentNum)){
    alert("Please provide a valid Account Number");
    return;
  }
  
  if(pinNum !== passNum){
    alert("Please provide a valid Pin Number");
      return;
    }
const totalAmount = availableBalance - amount;

if(isNaN(totalAmount) || totalAmount <= 0){
  alert("Please provide a valid Amount");
  return;
}

setInnerText('available-balance',totalAmount);
;



})
//transfer money 
document.getElementById("send-btn").addEventListener('click', function(event){
  event.preventDefault();
  const accountNum = getInput('account-num');
  const amount = getInputNumber('amount');
  const pinNum = getInputNumber('pin-num-3');
  const availableBalance = getTextNumber('available-balance');
  
  if(accountNum.length !== 11 || isNaN(accountNum)){
        alert("Please provide a valid Account Number");
        return;
      }
      
      if(pinNum !== passNum){
        alert("Please provide a valid Pin Number");
        return;
    }
    
    if(isNaN(amount) || amount <= 0){
        alert("Please provide a valid Amount");
        return;
    }
    
    if(amount >= 0){
      const charge = amount * .005;
      const mainAmount = charge + amount;
      
      const totalAmount = availableBalance - mainAmount;
      
      setInnerText('available-balance',totalAmount);
    }
    
  })
  
  //get bonus
  document.getElementById('bonus-btn').addEventListener('click', function(){
    const coupon = 'ROKSANA45';
    const couponCode = getInput('coupon');
    if(couponCode === coupon){
      alert("You Get '10% Discount' In Any Transiction For Today 'Only One Time'");
      return;
    }
    else{
        alert('Coupon ki seta Roksana Jane....You can ask her   ');
        return;
    }

})


//pay bill
document.getElementById("paybill-btn").addEventListener('click', function(event){
  event.preventDefault();
  const accountNum = getInput('bnk-account-num');
    const amount = getInputNumber('amount-to-pay');
    const pinNum = getInputNumber('pin-num-4');
    const availableBalance = getTextNumber('available-balance');
    
    
    if(accountNum.length !== 11 || isNaN(accountNum)){
      alert("Please provide a valid Account Number");
      return;
    }
    
    if(pinNum !== passNum){
        alert("Please provide a valid Pin Number");
        return;
    }
    if(isNaN(amount) || amount <= 0){
      alert("Please provide a valid Amount");
       return;
    }
    const totalAmount = availableBalance - amount;

     if(isNaN(totalAmount) || totalAmount <= 0){
      alert("Tor kase ki atw tk ase j chaitesos 'fokinni'");
       return;
    }
    setInnerText('available-balance',totalAmount);
  })

  //row js


  // document.getElementById("addMoney-btn").addEventListener('click', function(event){
  //     event.preventDefault();
  //    const bankName = document.getElementById('select-bnk').value;
  //    const accountNum = document.getElementById('bnk-num').value;
  //    const addAmount = getInputNumber('add-amount');
  //    const pinNum = getInputNumber('pin-num');
  
  //    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
     
  //    if(accountNum.length !== 11 || isNaN(accountNum)){
  //         alert("Please provide a valid Account Number");
  //       return;
  //     }
     
  //    if(pinNum !== passNum){
  //         alert("Please provide a valid Pin Number");
  //       return;
  //     }
  //    if(isNaN(addAmount) || addAmount <= 0){
  //         alert("Please provide a valid Amount");
  //       return;
  //     }
  //     const totalAmount = addAmount + availableBalance;
  
  //     document.getElementById("available-balance").innerText 
  //     = totalAmount;
  
  
  // })

// document.getElementById("withdraw-btn").addEventListener('click', function(event){
//     event.preventDefault();
//     const agentNum = document.getElementById('agent-num').value;
//     const amount = parseInt( document.getElementById('withdraw-amount').value);
//    const pinNum = parseInt(document.getElementById('pin-num-2').value);
//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);


//   if(agentNum.length !== 11 || isNaN(agentNum)){
//         alert("Please provide a valid Account Number");
//       return;
//     }
   
//    if(pinNum !== passNum){
//         alert("Please provide a valid Pin Number");
//       return;
//     }
// const totalAmount = availableBalance - amount;

// if(isNaN(totalAmount) || totalAmount <= 0){
//      alert("Please provide a valid Amount");
//    return;
//  }
//     document.getElementById("available-balance").innerText 
//     = totalAmount;



// })
// //transfer money 
// document.getElementById("send-btn").addEventListener('click', function(event){
//     event.preventDefault();
//     const accountNum = document.getElementById('account-num').value;
//     const amount = parseInt( document.getElementById('amount').value);
//    const pinNum = parseInt(document.getElementById('pin-num-3').value);
//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    

    
    
//     if(accountNum.length !== 11 || isNaN(accountNum)){
//         alert("Please provide a valid Account Number");
//         return;
//     }
    
//     if(pinNum !== passNum){
//         alert("Please provide a valid Pin Number");
//         return;
//     }
    
    
//     if(isNaN(amount) || amount <= 0){
//         alert("Please provide a valid Amount");
//         return;
//     }
    
//     if(amount >= 0){
//         const charge = amount * .02;
//         const mainAmount = charge + amount;
        
//         const totalAmount = availableBalance - mainAmount;
        
//         document.getElementById("available-balance").innerText 
//         = totalAmount;
//         return;
//     }

// })
  
// //get bonus
// document.getElementById('bonus-btn').addEventListener('click', function(){
//     const coupon = 'ROKSANA45';
//     const couponCode = document.getElementById('coupon').value;
//     if(couponCode === coupon){
//         alert("You Get '10% Discount' In Any Transiction For Today 'Only One Time'");
//         return;
//     }
//     else{
//         alert('Coupon ki seta Roksana Jane....You can ask her   ');
//         return;
//     }

// })


// //pay bill
// document.getElementById("paybill-btn").addEventListener('click', function(event){
//     event.preventDefault();
//     const accountNum = document.getElementById('bnk-account-num').value;
//     const amount = parseInt( document.getElementById('amount-to-pay').value);
//    const pinNum = parseInt(document.getElementById('pin-num-4').value);
//     const availableBalance = parseInt(document.getElementById('available-balance').innerText);


//   if(accountNum.length !== 11 || isNaN(accountNum)){
//         alert("Please provide a valid Account Number");
//       return;
//     }
   
//    if(pinNum !== passNum){
//         alert("Please provide a valid Pin Number");
//       return;
//     }
//     if(isNaN(amount) || amount <= 0){
//          alert("Please provide a valid Amount");
//        return;
//     }
// const totalAmount = availableBalance - amount;

//     document.getElementById("available-balance").innerText 
//     = totalAmount;

// })




//toggling feature

//toggle handler

function toggleHandler(id){
 const forms = document.getElementsByClassName('form');
    for(const form of forms){
      form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

document.getElementById('add-money-btn').addEventListener('click', function(){
   toggleHandler('add-money');

    const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('add-money-btn').classList.remove('border-[#0808081c]');
   document.getElementById('add-money-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    toggleHandler('cash-out');
    const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('cash-out-btn').classList.remove('border-[#0808081c]');
   document.getElementById('cash-out-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})
document.getElementById('transfar-btn').addEventListener('click', function(){
  toggleHandler('transfer-money');
  const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('transfar-btn').classList.remove('border-[#0808081c]');
   document.getElementById('transfar-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})
document.getElementById('get-bonus-btn').addEventListener('click', function(){
   toggleHandler('get-bonus');
   const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('get-bonus-btn').classList.remove('border-[#0808081c]');
   document.getElementById('get-bonus-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})
document.getElementById('pay-bill-btn').addEventListener('click', function(){
  toggleHandler('pay-bill');
  const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('pay-bill-btn').classList.remove('border-[#0808081c]');
   document.getElementById('pay-bill-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})
document.getElementById('transiction-btn').addEventListener('click', function(){
   toggleHandler('transactions');
   const formBtns = document.getElementsByClassName('form-btn ');

    for(const btn of formBtns){
      btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
      
       btn.classList.add('border-[#0808081c]')  
    }
   
   document.getElementById('transiction-btn').classList.remove('border-[#0808081c]');
   document.getElementById('transiction-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

})
// document.getElementById('add-money-btn').addEventListener('click', function(){
//    toggleHandler('add-money');
   

// })
// document.getElementById('cash-out-btn').addEventListener('click', function(){
//     const forms = document.getElementsByClassName('form');
//     for(const form of forms){
//       form.style.display = 'none';
//     }     
//     document.getElementById().style.display = 'block'

// })
// document.getElementById('transfar-btn').addEventListener('click', function(){
//    const forms = document.getElementsByClassName('form');
//     for(const form of forms){
//       form.style.display = 'none';
//     }
     
//      document.getElementById('transfer-money').style.display = 'block'

// })
// document.getElementById('get-bonus-btn').addEventListener('click', function(){
//    const forms = document.getElementsByClassName('form');
//     for(const form of forms){
//       form.style.display = 'none';
//     }

//     document.getElementById('get-bonus').style.display = 'block'

// })
// document.getElementById('pay-bill-btn').addEventListener('click', function(){
//    const forms = document.getElementsByClassName('form');
//     for(const form of forms){
//       form.style.display = 'none';
//     }
//     document.getElementById('pay-bill').style.display = 'block'

// })
// document.getElementById('transiction-btn').addEventListener('click', function(){
//    const forms = document.getElementsByClassName('form');
//     for(const form of forms){
//       form.style.display = 'none';
//     }
//     document.getElementById('transactions').style.display = 'block'

// })
// document.getElementById('add-money-btn').addEventListener('click', function(){
//     document.getElementById('cash-out').style.display = 'none'
//     document.getElementById('pay-bill').style.display = 'none'
//     document.getElementById('transfer-money').style.display = 'none'
//     document.getElementById('get-bonus').style.display = 'none'
//     document.getElementById('add-money').style.display = 'block';
   

// })
// document.getElementById('cash-out-btn').addEventListener('click', function(){
//     document.getElementById('add-money').style.display = 'none'
//     document.getElementById('pay-bill').style.display = 'none'
//     document.getElementById('transfer-money').style.display = 'none'
//     document.getElementById('get-bonus').style.display = 'none'
//      document.getElementById('cash-out').style.display = 'block'

// })
// document.getElementById('transfar-btn').addEventListener('click', function(){
//     document.getElementById('add-money').style.display = 'none'
//     document.getElementById('pay-bill').style.display = 'none'
//     document.getElementById('cash-out').style.display = 'none'
//     document.getElementById('get-bonus').style.display = 'none'
//      document.getElementById('transfer-money').style.display = 'block'

// })
// document.getElementById('get-bonus-btn').addEventListener('click', function(){
//     document.getElementById('add-money').style.display = 'none'
//     document.getElementById('pay-bill').style.display = 'none'
//     document.getElementById('cash-out').style.display = 'none'
//     document.getElementById('transfer-money').style.display = 'none'
//     document.getElementById('get-bonus').style.display = 'block'

// })
// document.getElementById('pay-bill-btn').addEventListener('click', function(){
//     document.getElementById('add-money').style.display = 'none'
//     document.getElementById('cash-out').style.display = 'none'
//     document.getElementById('transfer-money').style.display = 'none'
//     document.getElementById('get-bonus').style.display = 'none'
//     document.getElementById('pay-bill').style.display = 'block'

// })
const passNum = 1234;
document.getElementById("addMoney-btn").addEventListener('click', function(event){
    event.preventDefault();
   const bankName = document.getElementById('select-bnk').value;
   const accountNum = document.getElementById('bnk-num').value;
   const addAmount = parseInt( document.getElementById('add-amount').value);
   const pinNum = parseInt(document.getElementById('pin-num').value);

   const availableBalance = parseInt(document.getElementById('available-balance').innerText);
   
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

    document.getElementById("available-balance").innerText 
    = totalAmount;


})

//cash out 
document.getElementById("withdraw-btn").addEventListener('click', function(event){
    event.preventDefault();
    const agentNum = document.getElementById('agent-num').value;
    const amount = parseInt( document.getElementById('withdraw-amount').value);
   const pinNum = parseInt(document.getElementById('pin-num-2').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);


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
    document.getElementById("available-balance").innerText 
    = totalAmount;



})
//transfer money 
document.getElementById("send-btn").addEventListener('click', function(event){
    event.preventDefault();
    const accountNum = document.getElementById('account-num').value;
    const amount = parseInt( document.getElementById('amount').value);
   const pinNum = parseInt(document.getElementById('pin-num-3').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    

    
    
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
        const charge = amount * .02;
        const mainAmount = charge + amount;
        
        const totalAmount = availableBalance - mainAmount;
        
        document.getElementById("available-balance").innerText 
        = totalAmount;
        return;
    }

})
  
//get bonus
document.getElementById('bonus-btn').addEventListener('click', function(){
    const coupon = 'ROKSANA45';
    const couponCode = document.getElementById('coupon').value;
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
    const accountNum = document.getElementById('bnk-account-num').value;
    const amount = parseInt( document.getElementById('amount-to-pay').value);
   const pinNum = parseInt(document.getElementById('pin-num-4').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);


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

    document.getElementById("available-balance").innerText 
    = totalAmount;

})




//toggling feature
document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
    document.getElementById('add-money').style.display = 'block';
   

})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
     document.getElementById('cash-out').style.display = 'block'

})
document.getElementById('transfar-btn').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
     document.getElementById('transfer-money').style.display = 'block'

})
document.getElementById('get-bonus-btn').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'none'
    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'block'

})
document.getElementById('pay-bill-btn').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none'
    document.getElementById('cash-out').style.display = 'none'
    document.getElementById('transfer-money').style.display = 'none'
    document.getElementById('get-bonus').style.display = 'none'
    document.getElementById('pay-bill').style.display = 'block'

})
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
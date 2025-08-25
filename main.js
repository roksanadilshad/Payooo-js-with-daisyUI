document.getElementById("addMoney-btn").addEventListener('click', function(event){
    event.preventDefault();
   const bankName = document.getElementById('select-bnk').value;
   const accountNum = document.getElementById('bnk-num').value;
   const addAmount = parseInt( document.getElementById('add-amount').value);
   const pinNum = document.getElementById('pin-num').value;

   const availableBalance = parseInt(document.getElementById('available-balance').innerText);

  

    const totalAmount = addAmount + availableBalance;

    document.getElementById("available-balance").innerText 
    = totalAmount;
})
(function(){
  'use strict';

  $(document).ready(initialize);

  var balance = 1000;
  var amount;

  function initialize(){
    $('#withdraw').click(withdraw);
    $('#deposit').click(deposit);
  }

  function withdraw(){
    amount = $('#amount').val() * 1;
    balance = balance - amount;
    ledger('withdraw');
  }

  function deposit(){
    amount = $('#amount').val() * 1;
    balance = balance + amount;

    ledger('deposit');
  }


  function ledger(type){

    var $td1 = $('<td class="fee">');
    var $td2 = $('<td class="deposit">');
    var $td3 = $('<td class="withdrawal">');
    var $td4 = $('<td class="balance">');

    var $tr = $('<tr>');

    if (type === 'withdraw') {

      $td3.text('$' + amount);

      if (balance < 0){
        balance = balance - 50;
        $td1.text('$50');
      }

    } else {

      $td2.text('$' + Number(amount).toFixed(2));
      
    }

    $tr.append($td1, $td2, $td3, $td4);
    $('#ledger > tbody').append($tr);

    if (balance < 0){
      $td4.text('$(' + (balance * (-1)) + ')');
    } else {
      $td4.text('$' + Number(balance).toFixed(2));
    }

    $('#balance').text('$' + Number(balance).toFixed(2));
    $('#amount').val('');

  }

})();

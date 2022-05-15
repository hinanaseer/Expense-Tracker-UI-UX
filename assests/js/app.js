var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transaction: [
        { name: 'salary', amount: 5000, type:'income' },
        { name: 'Buy Grocery', amount: 50, type:'expense' },
        { name: 'Buy Guitar', amount: 500, type:'expense' },
    ]                                                                                                                                                               
}
var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionE1 = document.querySelector('#transaction');
function init() {
balanceEl.innerHTML = `Rs${state.balance}`;
incomeEl.innerHTML = `Rs${state.income}`;
expenseEl.innerHTML = `Rs${state.expense}`;

var transactionE1 = document.createElement('li');

for (var i = 0; i < state.transaction.length; i++) {
    transactionE1 = document.createElement('li')
}
}


init();
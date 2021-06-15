class UI {
    constructor() {
        this.budgetFeedback = document.querySelector('.budget-feedback');
        this.expenseFeedback = document.querySelector('.expense-feedback');
        this.budgetForm = document.querySelector('#budget-form');
        this.budgetInput = document.querySelector('#budget-input');
        this.budgetAmount = document.querySelector('#budget-amount');
        this.expenseAmount = document.querySelector('#expense-amount');
        this.balance = document.querySelector('#balance');
        this.balanceAmount = document.querySelector('#balance-amount');
        this.expenseForm = document.querySelector('#expense-form');
        this.expenseInput = document.querySelector('#expense-input');
        this.amountInput = document.querySelector('#amount-input');
        this.expenseList = document.querySelector('#expense-list');
        this.itemList = [];
        this.itemID = 0;
    }
}

function UI(id) {
    this.id = id;
}
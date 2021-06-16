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
    submitBudgetForm(){
        const value = this.budgetInput.value;
        if(value === '' || value < 0){
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p>Value cannot be empty or negative.</p>`;
            const self= this;
            setTimeout(function(){
                self.budgetFeedback.classList.remove('showItem');
            }, 4000)
        } else {
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';
            this.showBalance();
        }

    }
    showBalance() {
        const expense = this.totalExpense();
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
        if(total < 0 ){
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        }
        else if(total > 0 ){
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        }
        else if(total === 0 ){
            this.balance.classList.remove('showRed', 'showGreen');
            this.balance.classList.add('showBlack');
        }

    }
    submitExpenseForm() {
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
    }

    totalExpense(){
        let total = 400;
        return total;
    }
}

function eventListeners() {
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    const ui = new UI();
    
    budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();

    })
    expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitExpenseForm();
    })
    expenseList.addEventListener('click', function(event){
        
    })
}
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})

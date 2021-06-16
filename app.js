
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
        if(expenseValue === '' || amountValue === '' || amountValue < 0) {
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p>Values cannot be empty or negative</p>`
            const self = this;
            setTimeout(() => {
                self.expenseFeedback.classList.remove('showItem');
            }, 4000);
        }
        else {
            let amount = parseInt(amountValue);
            this.expenseInput.value = '';
            this.amountInput.value = '';

            let expense = {
                id: this.itemID,
                title: expenseValue,
                amount: amount
            };
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            this.showBalance();
        }
    }
    addExpense(expense){
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>   ${expense.title}</h6>
        <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
        <div class="expense-icons list-item">
         <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
       </svg>         </a>
         <a href="#" class="delete-icon" data-id="${expense.id}">
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
         <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
       </svg>         </a>
        </div>
       </div>`;
       this.expenseList.appendChild(div);
    }

    totalExpense(){
        let total = 0;
        if(this.itemList.length > 0){
            total = this.itemList.reduce(function(acc, curr){
                acc += curr.amount;
                return acc;
            }, 0); 
        }
        this.expenseAmount.textContent = total;
        return total;
    }
    editExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        this.expenseList.removeChild(parent);
        let expense = this.itemList.filter(function(item){return item.id === id; });
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;
        let tempList = this.itemList.filter(function(item) {return item.id !== id;});
        this.itemList = tempList;
        this.showBalance();
    }
    deleteExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        this.expenseList.removeChild(parent);
        let tempList = this.itemList.filter(function(item) {return item.id !== id;});
        this.itemList = tempList;
        this.showBalance();
        

    }
};


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
        if(event.target.parentElement.classList.contains('edit-icon')){
            ui.editExpense(event.target.parentElement);
        }
       else if(event.target.parentElement.classList.contains('delete-icon')){
        ui.deleteExpense(event.target.parentElement);

        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
})

const form = document.getElementById("deal_form");
const vendor = form.vendor;
const expense = form.expense;
let budgetText = document.getElementById("budget");
var budget = 0;

budgetText.innerHTML = budget;

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const vendorVal = vendor.value;
    const expenseVal = expense.value;
    if(vendorVal.replace("/\s/g","").trim().length !== 0 && expenseVal > 0) {
        budget += parseInt(expenseVal);
        budgetText.innerHTML = budget;
        e.target.reset();
    }
    else if (vendorVal.replace("/\s/g","").trim().length === 0) {
        alert("Vendor cannot be empty");
    }
    else {
        alert("Expense must be more than 0");
    }
});
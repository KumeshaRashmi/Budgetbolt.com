const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

/*=====clickable logo go to home page==============*/
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for logo click
    var logoLink = document.getElementById('logo-link');
    logoLink.addEventListener('click', function () {
        // Redirect to the home page (adjust the URL as needed)
        window.location.href = 'home.html';
    });
});



//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display='none';
})

//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

})

let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amoun')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    }
    expenses.push({category, amount, date});

    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

});

for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountCell.textContent = totalAmount;

    const newRow = expensesTableBody.inserRow();
    const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        expenses.splice(expenses.indexOf(expense), 1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
}

/*====profile===============*/

document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const fullNameInput = document.getElementById('fullName');
    const birthdayInput = document.getElementById('birthday');
    const genderInput = document.getElementById('gender');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneNumberInput = document.getElementById('phoneNumber');

    const savedFullName = document.getElementById('savedFullName');
    const savedBirthday = document.getElementById('savedBirthday');
    const savedGender = document.getElementById('savedGender');
    const savedEmail = document.getElementById('savedEmail');
    const savedPassword = document.getElementById('savedPassword');
    const savedPhoneNumber = document.getElementById('savedPhoneNumber');

    saveBtn.addEventListener('click', function () {
        savedFullName.textContent = fullNameInput.value;
        savedBirthday.textContent = birthdayInput.value;
        savedGender.textContent = genderInput.value;
        savedEmail.textContent = emailInput.value;
        savedPassword.textContent = passwordInput.value;
        savedPhoneNumber.textContent = phoneNumberInput.value;
        alert('Profile saved!');
    });
});

/*=====add acount=====*/
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the "Add Account" button
    var addAccountBtn = document.getElementById('add-account-btn');
    addAccountBtn.addEventListener('click', addAccount);

    // Function to add an account to the UI
    function addAccount() {
        var accountTypeInput = document.getElementById('account-type');
        var accountNameInput = document.getElementById('account-name');
        var accountNumberInput = document.getElementById('account-number');
        var accountBalanceInput = document.getElementById('account-balance');

        // Get the input values
        var accountType = accountTypeInput.value;
        var accountName = accountNameInput.value;
        var accountNumber = accountNumberInput.value;
        var accountBalance = parseFloat(accountBalanceInput.value);

        // Perform form validation
        if (!validateForm(accountType, accountName, accountNumber, accountBalance)) {
            return;
        }

        // Create a new account object
        var account = {
            type: accountType,
            name: accountName,
            number: accountNumber,
            balance: accountBalance
        };

        // Perform additional processing or storage as needed
        // For now, log the account details
        console.log("Account Details:", account);

        // Clear the form inputs
        clearFormInputs([accountTypeInput, accountNameInput, accountNumberInput, accountBalanceInput]);

        // Update the UI with the new account (you can customize this part)
        updateAccountList(account);
    }

    // Function to validate the form inputs
    function validateForm(type, name, number, balance) {
        // Add your validation logic here
        // For simplicity, I'm checking if all fields are non-empty
        if (!type || !name || !number || isNaN(balance) || balance < 0) {
            alert("Please fill in all fields with valid values.");
            return false;
        }
        return true;
    }

    // Function to clear form inputs
    function clearFormInputs(inputs) {
        inputs.forEach(function (input) {
            input.value = "";
        });
    }

    // Function to update the UI with the new account
    function updateAccountList(account) {
        // You can customize this part based on your UI structure
        var accountList = document.getElementById('account-list');
        var listItem = document.createElement('li');
        listItem.textContent = `${account.type} - ${account.name} (${account.number}) - Balance: $${account.balance.toFixed(2)}`;
        accountList.appendChild(listItem);
    }
});


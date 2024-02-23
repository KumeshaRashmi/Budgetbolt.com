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

// Add event listeners for reminder checkboxes
document.addEventListener('DOMContentLoaded', function() {
    var dailyCheckbox = document.getElementById('daily');
    var weeklyCheckbox = document.getElementById('weekly');
    var annualCheckbox = document.getElementById('annual');

    dailyCheckbox.addEventListener('change', function() {
        showReminder('Daily reminder set!');
    });

    weeklyCheckbox.addEventListener('change', function() {
        showReminder('Weekly reminder set!');
    });

    annualCheckbox.addEventListener('change', function() {
        showReminder('Annual reminder set!');
    });

    // Function to display a reminder message
    function showReminder(message) {
        alert(message);
    }

    // Function to add a new financial goal
    window.addGoal = function () {
        var newGoalInput = document.getElementById('new-goal');
        var financialGoalsList = document.getElementById('financial-goals');

        if (newGoalInput.value.trim() !== "") {
            // Create a new list item
            var listItem = document.createElement('li');

            // Create a checkbox for the goal
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            // Create a label for the goal
            var label = document.createElement('label');
            label.textContent = newGoalInput.value;

            // Create delete button
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function () {
                listItem.remove();
            });

            // Create edit button
            var editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.classList.add('edit-btn');
            editBtn.addEventListener('click', function () {
                var updatedGoal = prompt('Edit your financial goal:', label.textContent);
                if (updatedGoal !== null) {
                    label.textContent = updatedGoal;
                }
            });

            // Append checkbox and label to the list item
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);

            // Append the new goal to the list
            financialGoalsList.appendChild(listItem);

            // Clear the input field
            newGoalInput.value = "";

            // Add event listener for the checkbox
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    // Remove the goal if checkbox is checked
                    listItem.remove();
                }
            });
        }
    };

    // Function to add event listener for a financial goal
    function addGoalEventListener(goalItem) {
        goalItem.addEventListener('click', function () {
            // You can add reminder functionality or other actions here
            showReminder('Goal clicked: ' + goalItem.textContent);
        });
    }

    // Function to display a reminder message
    function showReminder(message) {
        alert(message);
    }

    // Add event listener for the "Add Goal" button
    var addButton = document.getElementById('add-button');
    addButton.addEventListener('click', addGoal);
});
//login

document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();

    // Simulate login functionality (replace this with your actual login logic)
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    // Check if email and password are provided (you can add more sophisticated validation)
    if (email && password) {
        // Redirect to the dashboard page after successful login
        window.location.href = "dashboard.html";
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('/submit-contact-form.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById('response-message').innerHTML = data;
    });
});

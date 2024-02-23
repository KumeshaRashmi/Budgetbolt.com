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


// Sample data for pie chart
const pieChartData = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [{
      data: [60, 30, 10], // Sample percentages for each category
      backgroundColor: ['rgba(0, 128, 0, 0.7)', 'rgba(255, 0, 0, 0.7)', 'rgba(0, 0, 255, 0.7)'],
      borderColor: ['rgba(0, 128, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)'],
      borderWidth: 1,
    }],
  };
  
  // Pie chart configuration
  const pieChartConfig = {
    type: 'pie',
    data: pieChartData,
  };
  
  // Create the pie chart
  const pieCtx = document.getElementById('financialSummaryChart').getContext('2d');
  new Chart(pieCtx, pieChartConfig);
  
  // Sample data for bar chart
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(0, 0, 139, 0.7)', // Dark blue
        borderColor: 'rgba(0, 0, 139, 1)', // Dark blue
        borderWidth: 1,
        data: [1000, 1200, 800, 1500, 2000, 1800, 1600, 1900, 2200, 2500, 2100, 1800], // Sample income values for each month
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(199, 21, 133, 0.7)', // Medium dark pink
        borderColor: 'rgba(199, 21, 133, 1)', // Medium dark pink
        borderWidth: 1,
        data: [600, 800, 700, 1000, 1200, 1100, 900, 1300, 1500, 1400, 1200, 1000], // Sample expenses values for each month
      },
    ],
  };
  
  // Bar chart configuration
  const barChartConfig = {
    type: 'bar',
    data: barChartData,
    options: {
      scales: {
        x: {
          stacked: false,
        },
        y: {
          stacked: false,
        },
      },
    },
  };
  
  // Create the bar chart
  const barCtx = document.getElementById('incomeExpensesChart').getContext('2d');
  new Chart(barCtx, barChartConfig);

  //calculate savings
  function calculateSavingsRate() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
      alert('Please enter valid numbers for income and expenses.');
      return;
    }

    var savings = income - expenses;
    var savingsRate = (savings / income) * 100;

    var savingsRateMessage = '';
    if (savingsRate < 0) {
      savingsRateMessage = 'Your expenses exceed your income. Consider reducing expenses or increasing income.';
    } else if (savingsRate < 20) {
      savingsRateMessage = 'Your savings rate is below the recommended benchmark of 20%. Consider reducing discretionary spending to save more.';
    } else if (savingsRate >= 20 && savingsRate < 50) {
      savingsRateMessage = 'Your savings rate is good, but there\'s still room for improvement. Consider increasing your savings rate to reach financial goals faster.';
    } else {
      savingsRateMessage = 'Congratulations! Your savings rate is above the recommended benchmark of 50%. Keep up the good work!';
    }

    document.getElementById('result').innerHTML = '<p>Your savings rate is: ' + savingsRate.toFixed(2) + '%</p><p>' + savingsRateMessage + '</p>';
  }
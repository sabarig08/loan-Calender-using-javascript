// script.js
document.getElementById('calculate-btn').addEventListener('click', function() {
    // UI elements
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    // Calculate
    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.textContent = `$${monthly.toFixed(2)}`;
        totalPayment.textContent = `$${(monthly * calculatePayments).toFixed(2)}`;
        totalInterest.textContent = `$${((monthly * calculatePayments) - principal).toFixed(2)}`;

        document.querySelector('.results').style.display = 'block';
    } else {
        alert('Please check your numbers');
    }
});

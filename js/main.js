let startBtn = document.getElementById('#start'),

    btn = document.getElementsByTagName('button');
    approveExpensesItemBtn = btn[0];
    approveOptionalExpensesItemBtn = btn[1];
    countBudgetBtn = btn[2];

    budgetValue = document.getElementsByClassName(".budget-value"),
    daybudgetValue = document.getElementsByClassName('.daybudget-value'),
    levelValue = document.getElementsByClassName('.level-value'),
    expensesValue = document.getElementsByClassName('.expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('.optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('.income-value'),
    monthsavingsValue = document.getElementsByClassName('.monthsavings-value'),
    yearsavingstValue = document.getElementsByClassName('.yearsavings-value');

    expensesInput = document.getElementsByClassName('.expenses-item');
    optionalExpensesItemInput = document.querySelectorAll('optionalexpenses-item');

    chooseIncomeInput = document.querySelector('#income');
    chooseSumOfSavingsInput = document.querySelector('#sum');
    choosePercentageOfSavingsInput = document.querySelector('#percent');

    savingsCheckbox = document.querySelector('#savings');
    
    year = document.querySelector('.year-value');
    month = document.querySelector('.month-value');
    day = document.querySelector('.day-value');
    console.log();
    
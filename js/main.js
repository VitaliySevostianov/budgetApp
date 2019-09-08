let startBtn = document.getElementById('start'),

    btn = document.getElementsByTagName('button'),
    approveExpensesItemBtn = btn[0],
    approveOptionalExpensesItemBtn = btn[1],
    countBudgetBtn = btn[2],

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingstValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesInput = document.getElementsByClassName('expenses-item'),
    optionalExpensesItemInput = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncomeInput = document.querySelector('#income'),
    chooseSumOfSavingsInput = document.querySelector('#sum'),
    choosePercentageOfSavingsInput = document.querySelector('#percent'),

    savingsCheckbox = document.querySelector('#savings'),
    
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    // ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ ЗАКОНЧЕНО
    
let money, 
    time,
    sum = 0;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    appIsWorking: false
};
startBtn.addEventListener('click',() => {
    time  =  prompt("Введите дату в формате YYYY-MM-DD");
    money =  +prompt("Бюджет на месяц?");
    
    while(isNaN(money) || money === '' || money === null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = `${Math.round(money)}р`;

    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    appData.appIsWorking = true;
});

    approveExpensesItemBtn.addEventListener('click', () => {
        if(appData.appIsWorking == true){
            
            for(let i = 0; i < expensesInput.length; i++){
                let a = expensesInput[i].value,
                    b = expensesInput[++i].value;

                if(typeof(a) === 'string' && typeof(a) != null && 
                typeof(b) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
                sum += +b;
                }else{
                    i -= 1;
                }
            }
            expensesValue.textContent = `${sum}р`;
        }else{
            alert(`Сначала начните расчёты!!!`);
        }
    });

    approveOptionalExpensesItemBtn.addEventListener('click', () => {
        if(appData.appIsWorking == true){   
            for(let i = 0; i < optionalExpensesItemInput.length; i++){
                let opt = optionalExpensesItemInput[i].value;
                appData.optionalExpenses[i] = opt;
                optionalexpensesValue.textContent += appData.optionalExpenses[i] + '; ';
            }
        }else{
            alert(`Сначала начните расчёты!!!`);
        }
    });

    countBudgetBtn.addEventListener('click', () => {
        if(appData.appIsWorking == true){ 
            if(appData.budget != undefined){
                appData.moneyPerDay = Math.round((appData.budget - sum) / 30);
                daybudgetValue.textContent = `Ежедневный бюджет: ${appData.moneyPerDay}р`;

                if(appData.moneyPerDay < 100){
                    levelValue.textContent = `Минимальный уровень достатка`;
                }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                    levelValue.textContent = `Средний уровень достатка`;
                }else if(appData.moneyPerDay > 2000){
                    levelValue.textContent = `Высокий уровень достатка`;
                }else{
                    levelValue.textContent = `Произошла ошибка`;
                }
            }else{
                daybudgetValue.textContent = `Произошла ошибка`;
            }
        }else{
            alert(`Сначала начните расчёты!!!`);
        }
    });

    chooseIncomeInput.addEventListener('input', () => {
        let items = chooseIncomeInput.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    });

    savingsCheckbox.addEventListener('click', () => {
        if(appData.savings === true){
            appData.savings = false;
        }else{
            appData.savings = true;
        }
    });

    chooseSumOfSavingsInput.addEventListener('input', () => {
        if(appData.savings === true){
            let sum = +chooseSumOfSavingsInput.value,
                percent = +choosePercentageOfSavingsInput.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = `${Math.round(appData.monthIncome)}р`;
            yearsavingstValue.textContent = `${Math.round(appData.yearIncome)}р`;
        }
    });

    choosePercentageOfSavingsInput.addEventListener('input', () => {
        if(appData.savings === true){
            let sum = +chooseSumOfSavingsInput.value,
                percent = +choosePercentageOfSavingsInput.value;

            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthsavingsValue.textContent = `${Math.round(appData.monthIncome)}р`;
            yearsavingstValue.textContent = `${Math.round(appData.yearIncome)}р`;
        }
    });



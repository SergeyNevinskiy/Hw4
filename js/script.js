const choice = prompt("+,-,*,/ ?");
const num1 = prompt("Введите первое число");
const num2 = prompt("Введите второе число");

if (choice == "+") {
    const result = (Number(num1) + Number(num2));
    alert(`${num1} ${choice} ${num2} = ${result}`);
} else if (choice == "-") {
    const result = (num1) - (num2);
    alert(`${num1} ${choice} ${num2} = ${result}`);
} else if (choice == "*") {
    const result = (num1) * (num2);
    alert(`${num1} ${choice} ${num2} = ${result}`);
} else if (choice == "/") {
    const result = (num1) / (num2);
    alert(`${num1} ${choice} ${num2} = ${result}`);
} else {
    alert("Ошибка попробуй еще раз");
}
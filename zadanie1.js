console.log("Проверка: все ли цифры данного трёхзначного числа различны");
alert("Проверка: все ли цифры данного трёхзначного числа различны");
var num = Number(prompt("Введите трёхзначное число:"));
console.log("Число: " + num);
if (num >= 100 && num <= 999) {
    var num1 = Math.floor(num/100);
    var num2 = Math.floor((num % 100)/10);
    var num3 = num % 10;

    var razn = num1 != num2 && num1 != num3 && num2 != num3;

    if ( razn) {
        alert("Все цифры данного числа различны");
        console.log("Все цифры данного числа различны");
    } else{
        alert("Не все цифры данного числа различны");
        console.log("Не все цифры данного числа различны");
    }
} else {
    alert("Пожалуйста, введите корректное трёхзначное число");
    console.log("Пожалуйста, введите корректное трёхзначное число");
}

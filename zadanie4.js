alert("Вычислить значение функции y=f(x) при произвольных значениях х");
console.log("Вычислить значение функции y=f(x) при произвольных значениях х");
var x = Number(prompt("Введите х: "));
console.log("Введите х: " + x);
var a = 4.27;
var b = 1.39;
var y = "Нет данных"
switch (x) {
    case -3:
        y =  Math.sqrt(a*x**2 + b);
        break
    case 3:
        y = Math.acos(1/(1 + Math.sqrt(a* Math.abs(x))));
        break
    case 5:
        y = Math.log(Math.abs(x + Math.sin(b*x)));
        break
}
alert("y = " + String(y));
console.log("y = " + String(y));
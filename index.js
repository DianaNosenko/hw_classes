// Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц.
// создайте следующие методы:
// - вывод информации о зарплате
// - подсчитать заработок за год
// - подсчитать количество работников 
// - *подсчитать сколько выплатили денег всем работникам за год

class Worker {
    static countWorkers = 0;
    constructor(id, name, category,salaryPerMonth){
        this.id = id;
        this.name = name;
        this.category = category;
        this.salaryPerMonth = salaryPerMonth;
        Worker.countWorkers++;
    }
    salaryInfo() {
        console.log(`Ежемесячная зарплата работника ${this.name}: ${this.salaryPerMonth} грн.`);
    }
    get salaryPerYear() {
        return this.salaryPerMonth*12;
    }
    showSalaryPerYear(){
        console.log(`Ежегодная зарплата работника ${this.name}: ${this.salaryPerYear} грн.`);
    }

}
const worker1 = new Worker(1, 'John', 'рабочий', 6000);
const worker2 = new Worker(2, 'Bill', 'рабочий', 6000);
const worker3 = new Worker(3, 'Sarah', 'специалист', 8000);
const worker4 = new Worker(4, 'James', 'специалист', 8000);
const worker5 = new Worker(5, 'Nikolas', 'технический специалист', 9000);
const worker6 = new Worker(6, 'Ann', 'технический специалист', 9000);
const worker7 = new Worker(7, 'Adam', 'руководитель', 15000);

let workersArray = [worker1, worker2, worker3, worker4, worker5, worker6, worker7];

workersArray.forEach(el => el.salaryInfo());
workersArray.forEach(el => el.showSalaryPerYear());
console.log(`Количество работников всего:${Worker.countWorkers}`);
// методом не получилось
let newArr = [];
for (let value of workersArray) { 
    newArr.push(value.salaryPerMonth*12);
}
let allSalaryPerYear = newArr.reduce((el1, el2) => el1 + el2);
console.log(`Годовая зарплата всех работников:${allSalaryPerYear} грн`)


// * Создайте класс Совместитель, который наследует Работника. У него есть дополнительные свойства - количество отработанных часов в день, 
//  ставка за час. создайте методы:
// - подсчитайте количество денег что зарабатывает за день
// - подсчитайте ему зарплату за меняц (обновив свойство потом у родителя)
// - подсчитайте количество совместителей

class PartTimeWorker extends Worker{
    static countPartTimers = 0;
    constructor(id, name, category, countHours, ratePerHour){
    super(id, name, category);
    this.countHours = countHours;
    this.ratePerHour = ratePerHour;
    PartTimeWorker.countPartTimers++;
    }
    get salaryPerDay() {
        return this.countHours*this.ratePerHour;
    }
    showSalaryPerDay() {
        console.log(`Ежедневная зарплата совместителя ${this.name}: ${this.salaryPerDay} грн.`)
    }
    get salaryPerMonthPart() {
        return this.salaryPerDay*30;
    }
    showSalaryPerMonth() {
        console.log(`Ежемесячная зарплата совместителя ${this.name}: ${this.salaryPerMonthPart} грн.`)}
}
const partTime1 = new PartTimeWorker(8, 'Jake', 'рабочий', 4, 35);
const partTime2 = new PartTimeWorker(9, 'Nalson', 'рабочий', 6, 35);
const partTime3 = new PartTimeWorker(10, 'Ron', 'специалист', 4, 40);

let partTimeArray = [partTime1, partTime2, partTime3];
partTimeArray.forEach(el => el.showSalaryPerDay());
partTimeArray.forEach(el => el.showSalaryPerMonth());
console.log(`Количество работников совместителей:${PartTimeWorker.countPartTimers}`);
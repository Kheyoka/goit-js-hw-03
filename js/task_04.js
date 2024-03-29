'use strict';

const countTotalSalary = function(employees) {
  let total = 0;
  for (let salary of Object.values(employees)) {
    total += salary;
  }
  return `Общая сумма зарплаты работников: ${total}`;
};

console.log(countTotalSalary({})); // 0
console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

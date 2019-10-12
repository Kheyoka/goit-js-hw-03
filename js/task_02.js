'use strict';

function countProps(obj) {
  const allProps = Object.keys(obj);
  const count = allProps.length;
  return count;
}

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

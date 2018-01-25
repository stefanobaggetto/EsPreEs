const getSum = require('./sum');

//TESTS
var arrTest1 = [1 , 2];

test('valida 1,2', () => {
  expect(getSum(arrTest1)).toBe(3);
});

var arrTest2 = [0 , 0];
test('valida 0, 0', () => {
  expect(getSum(arrTest2)).toBe(0);
});

var arrTest3 = [0 , 1];
test('valida 0, 1', () => {
  expect(getSum(arrTest3)).toBe(1);
});

var arrTest4 = [1 , -2];

test('invalida 1,-2', () => {
  expect(getSum(arrTest4)).toBe(-1);
});

test('invalida 0,0', () => {
  expect(getSum(0,0)).toBe(-1);
});

test('invalida -1,-1', () => {
  expect(getSum(-1,-1)).toBe(-1);
});

test('invalida "a","b"', () => {
  expect(getSum("a","b")).toBe(-1);
});

var vartest = 3;

test('invalida varibile singola', () => {
  expect(getSum(vartest)).toBe(-1);
});

var t = ["a", "b"];

test('invalida array stringhe', () => {
  expect(getSum(t)).toBe(-1);
});

var arrTest5 = [0 , 2, 7];

test('Invalida 3 parametri 7', () => {
  expect(getSum(arrTest5)).toBe(-1);
});

var arrTest6 = [0.1 , 2.7];

test('invalida float', () => {
  expect(getSum(arrTest6)).toBe(-1);
});

var arrTest7 = [1 , 2.7];

test('invalida 1 float', () => {
  expect(getSum(arrTest7)).toBe(-1);
});

var arrTest8 = ["a" , 2.7];

test('invalida una string e un float', () => {
  expect(getSum(arrTest8)).toBe(-1);
});

var arrTest9 = ["3" , "2"];

test('invalida stringhe con numeri', () => {
  expect(getSum(arrTest9)).toBe(-1);
});

var arrTest10 = {};
test('invalida oggetto', () => {
  expect(getSum(arrTest10)).toBe(-1);
});

var arrTest11 = [3];

test('invalida array con un solo parametro', () => {
  expect(getSum(arrTest11)).toBe(-1);
});

test('invalida zero parametri', () => {
  expect(getSum()).toBe(-1);
});


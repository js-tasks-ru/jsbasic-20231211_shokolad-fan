let calculator = {
  a: 0,
  b: 0,

  read(a = 0, b = 0) {
    // Number.isFinite строгая проверка,
    // является ли значения number
    // а далее на NaN Infinity -Infinity
    if (Number.isFinite(a && b)) {
      this.a = a;
      this.b = b;
    } else {
      throw new Error('Введите числовые значения');
    }
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


// calculator.read(3, 5);
// console.log(calculator.sum()); // 8
// console.log(calculator.mul()); // 15

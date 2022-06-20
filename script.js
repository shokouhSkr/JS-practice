"use strict";

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

// با اجرای این دو فانکشن پراپرتی بی ام آی به آبجکت ها اضافه میشه
Mark.calcBMI();
John.calcBMI();

console.log(
  `${Mark.BMI > John.BMI ? Mark.fullName : John.fullName}'s BMi (${
    Mark.BMI > John.BMI ? Mark.BMI : John.BMI
  }) is higher than ${Mark.BMI < John.BMI ? Mark.fullName : John.fullName}'s (${
    Mark.BMI < John.BMI ? Mark.BMI : John.BMI
  })`
); // Mark Miller's BMi (27.309968138370508) is higher than John Smith's (24.194608809993426)

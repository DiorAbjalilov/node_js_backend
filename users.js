class Users {
  constructor(name, age, fristName) {
    this.name = name;
    this.fristName = fristName;
    this.age = age;
  }
  hello() {
    console.log(`Metod (hello) ishladi, ${this.name}`);
  }
}
module.exports = Users;

// Declare function:
function logger(log){
    console.log(log);
};
// ----------------------------------------------------------------
// Expression function:
const logger1 = function(log){
    console.log(log);
};
// ----------------------------------------------------------------
// Arrow function:
const logger2 = (log) => {
    console.log(log);
};
logger2('Message');
// ----------------------------------------------------------------
// In case arrow function only has one argument, we can remove () and {}:
const logger3 = (log) => console.log(log);
const logger4 = log => console.log(log);
logger3("Message...");
logger4("Message...");
// ----------------------------------------------------------------
const sum = (a,b) => {
    return a + b;
};
// ----------------------------------------------------------------
// Above function under arrow function format:
const sumArrow = (a,b) => a + b;
console.log(sumArrow(2,2));
// ----------------------------------------------------------------
//Return object:
const myObj0 = (a,b)=>{
    return {
        a: a,
        b: b
    }
};
console.log(myObj0('VinhTester','24 years old'));
// ----------------------------------------------------------------
//To return an object with arrow function:
const myObj = (a,b) => ({a:a,b:b}); //We use () to cover body function in case don't use the 'return' key
console.log(myObj('VinhTester','24 years old'));

// ----------------------------------------------------------------
const course = {
    name: 'JavaScript basic course',
    getName: function(){
        return this.name;//This ở đây được hiểu là cái thèn gọi tới phương thức getName - chính là thèn course
        return this;// Nó sẽ trả về cái object course này luôn, và thèn this ở đây nó là context. Lưu ý arrow function ko có context của nó. Tức là nếu mình viết lại cái function getName này dưới dạng arrow function thì khi return this; nó sẽ ra undefined.
    }
};

console.log(course.getName());

// ----------------------------------------------------------------
// Ko thể sử dụng arrow function làm function constructor được
const Course = function(name,price){
    this.name = name;
    this.price = price;
}
const jsCourse = new Course('JavaScript',1000);
console.log(jsCourse);// Return name and price correctly 
// But in case of arrow function
const Course1 = (name,price)=>{
    this.name = name;
    this.price = price;
}
const jsCourse1 = new Course1('JavaScript',1000);
console.log(jsCourse1);// Will show an error: Uncaught TypeError: Course1 is not a constructor

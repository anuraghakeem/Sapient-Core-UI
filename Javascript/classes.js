class Student{
    constructor(){
        this.firstname;
        this.lastname;
        this.age;
    }
    getFullName(){
        return this.firstname+" "+this.lastname;
    }
}

class Dept extends Student{
    constructor(){
        super();
        this.cake;
        // this.lastname;
        // this.age;
    }
    getFullName2(){
        return this.firstname+" "+this.lastname+" "+this.age;
    }
}

let stu=new Student();
stu.firstname="Rahul";
stu.lastname="Raj";
stu.age=10;
console.log(stu);
console.log(stu.getFullName());

let dept=new Dept();
dept.firstname="Rohit";
dept.lastname="Rai";
dept.age=10;
dept.cake="Chocolate";
console.log(dept);
console.log(dept.getFullName());
console.log(dept.getFullName2());

let m=new Map();

m.set("Kiran", "PVS");
m.set("Rahul", "EVS");
m.set("Rohit", "TVS");

m.forEach((v,k)=>{
    console.log(v);
    console.log(k);
})

var mySet = new Set();
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add('some text'); // Set [ 1, 5, 'some text' ]

var user={name:"Bhavika",age:60,gender:"m"};
var{name,age}={...user}
console.log(name);
console.log(age);

var [a,b]=[1,2];
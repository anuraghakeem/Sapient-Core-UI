var x=10;
function testme(){
    let x= 20;
    if(true){
        let x=90;
        console.log(x);
    }
    console.log(x)
}
testme();
console.log(x);
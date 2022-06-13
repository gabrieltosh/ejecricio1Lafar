//var a = [1,2,3,4,5,6,7,9]
var a = [1,2,1,1,4,5,6,7]
//var a = [1,2,3,4,5,6,7]

var f=[]
var g=0
var count=1
var error=0
a.forEach(element => {
   if(element !=count){
    error+=1
    g=element
   }else{
    f.push(element)
    count+=1
   }
});

switch (error) {
    case 0:
        console.log('El array es una secuencia progresiva')
        console.log('input : ')
        console.log(a)
        console.log('output : ')
        console.log(f)
        break;
    case 1:
        console.log('El array es una secuencia progresiva se elimino el elemento : '+g )
        console.log('input : ')
        console.log(a)
        console.log('output : ')
        console.log(f)
        break;
    default:
        console.log('El array no es una secuencia progresiva')
        break;
}
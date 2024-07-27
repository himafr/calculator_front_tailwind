const one=document.getElementById("holder")
const two=document.getElementById("holder2")
const operator =document.getElementById("ope")
var see =one
document.getElementById("plus").addEventListener("click",()=>{
    operator.value ="+"
    see =two
})
document.getElementById("min").addEventListener("click",()=>{
    operator.value ="-"
    see =two
})
document.getElementById("times").addEventListener("click",()=>{
    operator.value ="*"
    see =two
})
document.getElementById("mul").addEventListener("click",()=>{
    operator.value ="/"
    see =two
})
document.getElementById("mod").addEventListener("click",()=>{
    operator.value ="%"
    see =two
})
document.getElementById("clear").addEventListener("click",()=>{
    operator.value =""
    one.value =""
    two.value =""
    see =one
})
var z = "string"
z.length
console.log(z.length)
z=z.slice(0,z.length-1)
console.log(z)

document.getElementById("clear-one").addEventListener("click",()=>{
see.value=see.value.slice(0,see.value.length-1)
})

document.getElementById("eq").addEventListener("click",()=>{
    if(one.value==""){}else{
        one.value =calc(Number(one.value),Number(two.value) ,operator.value)
        console.log(one.value)
        if(one.value==0){
            two.value=""
            one.value=0
            see =one
        }else{
            two.value=""
            see =two
        }
    }
})

//     document.getElementById("num1").addEventListener("click",()=>{
//         see.value +=1
//     })


// document.getElementById



document.querySelectorAll(".num").forEach((element,index) => {
    element.addEventListener("click",()=>{
            see.value +=(index+1)
            })
});
document.getElementById("num0").addEventListener("click",()=>{
    see.value +=0
    })


function calc(num1, num2, operator){
switch(operator){
    case "+":
return num1+num2
break;
    case "-":
return num1-num2
break;
    case "*":
return num1*num2
break;
    case "/":
        if(num2==0){
            alert("cant divide on zero")
            return 0
        }else{
            return num1/num2
        }
break;
    case "%":
return num1%num2
break;
}

}
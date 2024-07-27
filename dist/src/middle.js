let mOne=document.getElementById("mHolder1")
let mTwo=document.getElementById("mHolder2")
let mOperator =document.getElementById("mOperator")
let mSee =mOne
document.getElementById("M+").addEventListener("click",()=>{
    mOperator.value ="+"
    mSee =mTwo
})
document.getElementById("M-").addEventListener("click",()=>{
    mOperator.value ="-"
    mSee =mTwo
})
document.getElementById("M*").addEventListener("click",()=>{
    mOperator.value ="*"
    mSee =mTwo
})
document.getElementById("M/").addEventListener("click",()=>{
    mOperator.value ="/"
    mSee =mTwo
})

document.getElementById("MAc").addEventListener("click",()=>mRelease())
document.getElementById("MC").addEventListener("click",()=>{
mSee.value=mSee.value.slice(0,mSee.value.length-1)
})

document.getElementById("M=").addEventListener("click",()=>{
    if(mOne.value=="")mOne.value=0;
    if(mTwo.value=="")mTwo.value=0;
    if(mOperator.value==""){
        mRelease()
    }else{
     mOne.value =calc(parseFloat(mOne.value),parseFloat(mTwo.value) ,mOperator.value)
        console.log(mOne.value)
        if(mOne.value==0){
            mTwo.value=""
            mOne.value=0
            mSee =mOne
        }else{
            mTwo.value=""
            mSee =mTwo
        }
        }
})
document.getElementById("M.").addEventListener("click",()=>{
    mSee.value += '.';  
})
    document.getElementById("Mnum1").addEventListener("click",()=>{
        mSee.value +=1
    })
    document.getElementById("Mnum2").addEventListener("click",()=>{
        mSee.value +=2
    })
    document.getElementById("Mnum3").addEventListener("click",()=>{
        mSee.value +=3
    })
    document.getElementById("Mnum4").addEventListener("click",()=>{
        mSee.value +=4
    })
    document.getElementById("Mnum5").addEventListener("click",()=>{
        mSee.value +=5
    })
    document.getElementById("Mnum6").addEventListener("click",()=>{
        mSee.value +=6
    })
    document.getElementById("Mnum7").addEventListener("click",()=>{
        mSee.value +=7
    })
    document.getElementById("Mnum8").addEventListener("click",()=>{
        mSee.value +=8
    })
    document.getElementById("Mnum9").addEventListener("click",()=>{
        mSee.value +=9
    })
    document.getElementById("Mnum0").addEventListener("click",()=>{
        mSee.value +=0
    })
    document.getElementById("Mnum00").addEventListener("click",()=>{
        mSee.value +=0;
        mSee.value +=0;
    })


function calc(num1, num2, Operator){

switch(Operator){
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
            alert("Can't divide by zero")
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
function mRelease(){
    mOperator.value =""
    mOne.value =""
    mTwo.value =""
    mSee =mOne
}

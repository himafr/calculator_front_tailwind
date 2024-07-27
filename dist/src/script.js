const lOne=document.getElementById("lHolder1")
const lTwo=document.getElementById("lHolder2")
const lOperator =document.getElementById("lOperator")
let lSee =lOne
document.getElementById("L+").addEventListener("click",()=>{
    lOperator.value ="+"
    lSee =lTwo
})
document.getElementById("L-").addEventListener("click",()=>{
    lOperator.value ="-"
    lSee =lTwo
})
document.getElementById("L*").addEventListener("click",()=>{
    lOperator.value ="*"
    lSee =lTwo
})
document.getElementById("L/").addEventListener("click",()=>{
    lOperator.value ="/"
    lSee =lTwo
})

document.getElementById("LAc").addEventListener("click",()=>lRelease())
document.getElementById("LC").addEventListener("click",()=>{
lSee.value=lSee.value.slice(0,lSee.value.length-1)
})

document.getElementById("L=").addEventListener("click",()=>{
    if(lOne.value=="")lOne.value=0;
    if(lTwo.value=="")lTwo.value=0;
    if(lOperator.value==""){
        lRelease()
    }else{
        lOne.value =calc(parseFloat(lOne.value),parseFloat(lTwo.value) ,lOperator.value)
        console.log(lOne.value)
        if(lOne.value==0){
            lTwo.value=""
            lOne.value=0
            lSee =lOne
        }else{
            lTwo.value=""
            lSee =lTwo
        }   
    }
    })
document.getElementById("L.").addEventListener("click",()=>{
    lSee.value += '.';  
})
    document.getElementById("Lnum1").addEventListener("click",()=>{
        lSee.value +=1
    })
    document.getElementById("Lnum2").addEventListener("click",()=>{
        lSee.value +=2
    })
    document.getElementById("Lnum3").addEventListener("click",()=>{
        lSee.value +=3
    })
    document.getElementById("Lnum4").addEventListener("click",()=>{
        lSee.value +=4
    })
    document.getElementById("Lnum5").addEventListener("click",()=>{
        lSee.value +=5
    })
    document.getElementById("Lnum6").addEventListener("click",()=>{
        lSee.value +=6
    })
    document.getElementById("Lnum7").addEventListener("click",()=>{
        lSee.value +=7
    })
    document.getElementById("Lnum8").addEventListener("click",()=>{
        lSee.value +=8
    })
    document.getElementById("Lnum9").addEventListener("click",()=>{
        lSee.value +=9
    })
    document.getElementById("Lnum0").addEventListener("click",()=>{
        lSee.value +=0
    })
    document.getElementById("Lnum00").addEventListener("click",()=>{
        lSee.value +=0;
        lSee.value +=0;
    })
    function lRelease(){
        lOperator.value =""
        lOne.value =""
        lTwo.value =""
        lSee =lOne
    }
 
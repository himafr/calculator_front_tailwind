let rOne=document.getElementById("rHolder1")
let rTwo=document.getElementById("rHolder2")
let rOperator =document.getElementById("rOperator")
let rSee =rOne
document.getElementById("R+").addEventListener("click",()=>{
    rOperator.value ="+"
    rSee =rTwo
})
document.getElementById("R-").addEventListener("click",()=>{
    rOperator.value ="-"
    rSee =rTwo
})
document.getElementById("R*").addEventListener("click",()=>{
    rOperator.value ="*"
    rSee =rTwo
})
document.getElementById("R/").addEventListener("click",()=>{
    rOperator.value ="/"
    rSee =rTwo
})

document.getElementById("RAc").addEventListener("click",()=>rRelease())
document.getElementById("RC").addEventListener("click",()=>{
rSee.value=rSee.value.slice(0,rSee.value.length-1)
})

document.getElementById("R=").addEventListener("click",()=>{
    if(rOne.value=="")rOne.value=0;
    if(rTwo.value=="")rTwo.value=0;
    if(rOperator.value==""){
        rRelease()
    }else{
    rOne.value =calc(parseFloat(rOne.value),parseFloat(rTwo.value) ,rOperator.value)
        console.log(rOne.value)
        if(rOne.value==0){
            rTwo.value=""
            rOne.value=0
            rSee =rOne
        }else{
            rTwo.value=""
            rSee =rTwo
        }
        }
  
})

    document.getElementById("Rnum1").addEventListener("click",()=>{
        rSee.value +=1
    })
    document.getElementById("Rnum2").addEventListener("click",()=>{
        rSee.value +=2
    })
    document.getElementById("Rnum3").addEventListener("click",()=>{
        rSee.value +=3
    })
    document.getElementById("Rnum4").addEventListener("click",()=>{
        rSee.value +=4
    })
    document.getElementById("Rnum5").addEventListener("click",()=>{
        rSee.value +=5
    })
    document.getElementById("Rnum6").addEventListener("click",()=>{
        rSee.value +=6
    })
    document.getElementById("Rnum7").addEventListener("click",()=>{
        rSee.value +=7
    })
    document.getElementById("Rnum8").addEventListener("click",()=>{
        rSee.value +=8
    })
    document.getElementById("Rnum9").addEventListener("click",()=>{
        rSee.value +=9
    })
    document.getElementById("Rnum0").addEventListener("click",()=>{
        rSee.value +=0
    })
    document.getElementById("R.").addEventListener("click",()=>{
        rSee.value += '.';  
    })
    document.getElementById("Rnum00").addEventListener("click",()=>{
        rSee.value +=0;
        rSee.value +=0;
    })
    function rRelease(){
        rOperator.value =""
        rOne.value =""
        rTwo.value =""
        rSee =rOne
    }
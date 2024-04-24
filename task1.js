const netice =document.querySelector(".netice")
const reqem1 =document.querySelector(".reqem1")
const reqem2 =document.querySelector(".reqem2")
const buttons =document.querySelector(".buttons")
const toplama =document.querySelector(".toplama")
const cixma =document.querySelector(".cixma")
const vurma =document.querySelector(".vurma")
const bolme =document.querySelector(".bolme")
const sifirlamaq =document.querySelector(".sifirlamaq")
const n=document.querySelector(".n")


toplama.addEventListener("click", (e) => {
    let sum = +reqem1.value + +reqem2.value;
    n.textContent = sum
})

cixma.addEventListener("click", (e)=>{
    let sum =+reqem1.value - +reqem2.value;
    n.textContent = sum
}
)

vurma.addEventListener("click",(e)=>{
    let sum = +reqem2.value * +reqem2.value;
    n.textContent=sum
})


bolme.addEventListener("click" ,(e)=>{
    let sum = +reqem1.value / +reqem2.value

    n.textContent=sum


})


sifirlamaq.addEventListener("click" ,(e)=>{

   let sum =reqem1.value=""
   let sum1= reqem2.value=""

    n.textContent=sum1
    n.textContent=sum

})
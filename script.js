const pics = document.querySelectorAll(".pic")
pics.forEach((pic)=>{
pic.addEventListener("click",()=>{
    RemoveActive()
    pic.classList.add ("active")
})
})

function RemoveActive (){
    pics.forEach((pic)=>{
    pic.classList.remove("active")
    })
}
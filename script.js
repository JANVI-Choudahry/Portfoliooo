console.log("scripts running..........")
document.querySelector('.cross').style.display = 'none';

document.querySelector('.haamer').addEventListener("click" , ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

   if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.hamm').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';

}
else{
    document.querySelector('.hamm').style.display = 'none';
setTimeout (() =>{



    document.querySelector('.cross').style.display = 'inline';
},300)
}
})

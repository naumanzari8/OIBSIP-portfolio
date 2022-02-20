console.log("script running")
document.querySelector('.cros').style.display = 'none';


document.querySelector('.hamBurger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cros').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.infoContainer').style.position = 'relative';
            document.querySelector('.infoContainer').style.left = '0px';
        },100)
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.cros').style.display = 'inline';
            document.querySelector('.infoContainer').style.position = 'relative';
            document.querySelector('.infoContainer').style.left = '100px';
        },300);
    }
})

 
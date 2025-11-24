let darkmode = document.getElementsByClassName("dark")[0];

darkmode.addEventListener("click", function(){
   document.body.classList.toggle("dark-mode");
});

const bar = document.getElementById('bar');
const nav = document.getElementById('close');
const close = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })

}

if (close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
    
}

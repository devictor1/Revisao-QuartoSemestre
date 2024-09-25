const imgContainer = document.getElementsByClassName("imgContainer")[0];
const imgs = imgContainer.children;
const btnProx = document.getElementById("proximo");
const btnAnte = document.getElementById("anterior");
let currentIndex = 0;
let maxIndex = imgs.length - 1;

btnProx.addEventListener("click", () => {
if (currentIndex != maxIndex){
        imgs[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % imgs.length;
        imgs[currentIndex].classList.add("active");
            
} else {
        alert("Última imagem")
}
});
btnAnte.addEventListener("click", () => {
if (currentIndex != 0){
    imgs[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1) % imgs.length;
    imgs[currentIndex].classList.add("active");
        
} else {
    alert("Primeira imagem")
}
});
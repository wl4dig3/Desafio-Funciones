function pintar(color) {
    let ele = document.getElementById('ele1');
    ele.addEventListener("click", pintar);
    ele.style.backgroundColor = color;
    console.log(ele);
}

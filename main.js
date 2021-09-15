function changecolor(){
    let color = document.getElementById("colorname").value;
    document.body.style.backgroundColor = color;
}
const change = (id) => {
    document.body.style.background = document.getElementById(id).innerHTML;
}
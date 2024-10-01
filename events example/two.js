function changecolor(){
    let btnref=document.getElementsByTagName('button')[0]
    console.log(btnref);
    btnref.style.backgroundColor="green";
}
function changecolor1(){
    document.querySelector('#btn1').style.backgroundColor="green"
}
function chngecolor(){
    document.getElementById('abc').style.backgroundColor="green";
}
function changecase(){
    let name=document.getElementById('idk').value;
    document.getElementById('idk').value=name.toUpperCase();
}
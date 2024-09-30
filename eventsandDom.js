//events and Dom   26/09/2024
//events are three types mouse,browser and from. 

function display(){
    alert("Good Morning")
    //document.write("Good Boy")
    //console.log("Good Man")
}


function one(){
    document.write("Hello Everyone")
}

    //DOM
    //document.getElementById('abc').innerHTML="Good Evening"
    //another way

    let tag_ref=document.getElementById('abc')
    console.log(tag_ref)
    tag_ref.innerHTML=("Good Morning")
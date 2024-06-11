let card = document.getElementById("card");

document.querySelector(" #yes").addEventListener('click',function(){
    let question = document.getElementById("question");
    let mensagem = document.getElementById("mensagem");


    card.style.backgroundImage = 
    "url('foto2.png')";
    question.style.display = "none";
    MessageChannel.style.display = "flex";
});

document.querySelector("#no").addEventListener("mouseover", function(){
    let width = window.innerWidth - 50;
    let height = window.innerWidth - 50;

    this.style.position = "absolute"
    this.style.top = Math.random() * width + "px";
    this.style.left = Math.random() * height + "px";
});

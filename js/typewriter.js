var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

$(function() {
    typewriter
        .pauseFor(1000)
        .typeString('Seja bem vindo (a)!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Sou André Lima')
        .pauseFor(1500)
        .deleteAll()
        .start();
});


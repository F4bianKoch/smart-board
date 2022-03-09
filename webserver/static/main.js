$(function () {
    console.log('I am here!');
    var socket = new WebSocket('ws://localhost:8001/ws/time/');

    socket.onmessage = function (e) {
        var djangoData = JSON.parse(e.data);
        console.log('Hello');
        console.log(djangoData);

        document.querySelector('#time').innerText = djangoData.time;
    }
});
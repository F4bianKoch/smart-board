// conect to websocket
const loc = window.location;
console.log(loc);

const protocol = "ws://";
if (loc.protocol == "https") {
    const protocol = "wss://";
}

const connection = protocol + loc.hostname + ":5051/ws/screensaver/";
var socket = new WebSocket(connection);

// update time if websocket has new time data
socket.onmessage = function (e) {
    var djangoData = JSON.parse(e.data);

    document.querySelector(".time").innerText = djangoData.time;
    document.querySelector(".date").innerText = djangoData.date;
};
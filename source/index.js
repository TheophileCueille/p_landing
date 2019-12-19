import "./style.css";

document.onemousemove = (ev) => {
	console.log(ev);

const cursor = document.getElementsByClassName ('cursor')[0];

cursor.style.top = ev.clientY;
cursor.style.left =  ev.cleintX;
}

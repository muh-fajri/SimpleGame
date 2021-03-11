/* Drag and Drop */
const dragDrop = document.getElementById("drag-n-drop");

const onDragStart = (event) => {
	// Mengatur id elemen yang diseret dengan setData()
	event.dataTransfer.setData("text/plain", event.target.id);
	document.getElementsByClassName("answer")[0].style.display = "none";
	document.getElementsByClassName("answer")[1].style.display = "none";
	dragDrop.play();
	
	// console.log(a);
	// Perbarui penataan style item yang diseret untuk currentTarget
/*	event.currentTarget.style.backgroundColor = "#c00";
	event.currentTarget.style.boxShadow = "0 0 5px #000";   */
};
const onDragOver = (event) => {
	// Memastikan item yang diseret mendapatkan perilaku peletakan yang diinginkan disusul penanganan onDrop()
	event.preventDefault();
};
const onDrop = (event) => {
	// getData objek dataTransfer dari id elemen yang diset sebelumnya pada setData()
	const id = event.dataTransfer.getData("text");
	
	// Pilih elemen draggable dengan id yang diambil
	const draggableElement = document.getElementById(id);
	
	// Pilih elemen dropzone sebagai target
	const dropzone = event.target;
	
	// Tambahkan elemen draggable ke dropzone
	dropzone.appendChild(draggableElement);

	dragDrop.play();
	
	// Atur ulang objek dataTransfer
	event.dataTransfer.clearData();

};
/*-- Drag and Drop --*/

/* Get Answers*/
cekJawaban = () => {
	const dropzone = document.querySelectorAll("#dropzone > choice-draggable");

	const answer1 = document.getElementsByClassName("choice-draggable")[4].innerText;
	const answer2 = document.getElementsByClassName("choice-draggable")[5].innerText;

	console.log(answer1);
	if((answer1 === "Semangka" && answer2 === "Watermelon") || (answer1 === "Watermelon" && answer2 === "Semangka")) {
		document.getElementsByClassName("answer")[0].style.display = "block";
		const win = document.getElementById("win");
		win.play();
	} else {
		document.getElementsByClassName("answer")[1].style.display = "block";
		const failed = document.getElementById("failed");
		failed.play();
	}
}
/*-- Get Answers --*/

/* Play and Pause */
const myAudio = document.getElementById("audio");
const btn = document.getElementById("btn-playback");
const btnIcon = document.querySelector("#btn-playback > i"); // Select the first elemen which parent is #btn-playback
const btnText = document.getElementById("btn-text");

const playPause = () => {

	const dataPlay = btn.getAttribute("data-play");

	if(dataPlay === "false") {
		btn.setAttribute("data-play", "true");
		myAudio.play();
		btnIcon.classList.remove("fa-play");
		btnIcon.classList.add("fa-pause");
		btnText.innerText = "PAUSE";
	} else {
		btn.setAttribute("data-play", "false");
		myAudio.pause();
		btnIcon.classList.remove("fa-pause");
		btnIcon.classList.add("fa-play");
		btnText.innerText = "PLAY";
	}
};
myAudio.onpause = () => {
	btn.setAttribute("data-play", "false");
	myAudio.pause();
	btnIcon.classList.remove("fa-pause");
	btnIcon.classList.add("fa-play");
	btnText.innerText = "PLAY";
};
/*-- Play and Pause --*/
window.onload = () => {
	swal ("Selamat Bermain!!!", "by Muhammad Fajri", "info");
}
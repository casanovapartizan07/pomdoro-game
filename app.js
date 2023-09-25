let timerInterval;
let minutes = 25;
let seconds = 0;
let isRunning = false;
let currentTimer = "work";

function startTimer(timerType) {
	if (!isRunning) {
		isRunning = true;
		currentTimer = timerType;
		setTimerDuration(timerType);
		timerInterval = setInterval(updateTimer, 1000);
	}
}

function stopTimer() {
	if (isRunning) {
		isRunning = false;
		clearInterval(timerInterval);
	}
}

function resetTimer() {
	stopTimer();
	currentTimer = "work";
	setTimerDuration(currentTimer);
	updateDisplay();
}

function setTimerDuration(timerType) {
	switch (timerType) {
		case "work":
			minutes = 25;
			seconds = 0;
			break;
		case "shortBreak":
			minutes = 2;
			seconds = 0;
			break;
		case "longBreak":
			minutes = 15;
			seconds = 0;
			break;
	}
}

function updateTimer() {
	if (minutes === 0 && seconds === 0) {
		stopTimer();
		document.getElementById("alarm").play();
		return;
	}

	if (seconds === 0) {
		minutes--;
		seconds = 59;
	} else {
		seconds--;
	}

	updateDisplay();
}

function updateDisplay() {
	const timerDisplay = document.getElementById("timer");
	timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
		.toString()
		.padStart(2, "0")}`;
}
document.addEventListener("mousemove", (e) => {
	const cursor = document.querySelector(".cursor");
	cursor.style.top = e.pageY - 5 + "px";
	cursor.style.left = e.pageX - 5 + "px";
});

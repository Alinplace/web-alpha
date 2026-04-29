const btn = document.getElementById('action-btn');
const msg = document.getElementById('status-msg');

btn.addEventListener('click', function() {
	msg.innerText = "Connecting to the system...";
	msg.style.color = "#00ff00";

	setTimeout(() => {
		msg.innerText = "Status: Online. Ready for work.";
	}, 2000);
});
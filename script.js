//your JS code here. If required.

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentSound;
buttons.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		if(currentSound){
			currentSound.pause()
		}
		const soundFile = btn.getAttribute('data-sound');
		currentSound = new Audio(soundFile);
		currentSound.play();
	})
})

stopButton.addEventListener('click',()=>{
	if(currentSound){
			currentSound.pause();
		currentSound.currentTime=0;//Reset to the begining;
		}
})
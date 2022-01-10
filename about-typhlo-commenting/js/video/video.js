const videoInnerFirst = document.getElementById('video-inner-1');
const videoFirst = document.getElementById('video-1');
const videoFirstButton = videoInnerFirst.querySelector('.typhlo-btn');

const videoInnerSecond = document.getElementById('video-inner-2');
const videoSecond = document.getElementById('video-2');
const videoSecondButton = videoInnerSecond.querySelector('.typhlo-btn');

const videoInnerThird = document.getElementById('video-inner-3');
const videoThird = document.getElementById('video-3');
const videoThirdButton = videoInnerThird.querySelector('.typhlo-btn');

playOrPauseVideo(videoInnerFirst, videoFirst, videoFirstButton);
playOrPauseVideo(videoInnerSecond, videoSecond, videoSecondButton);
playOrPauseVideo(videoInnerThird, videoThird, videoThirdButton);

function playOrPauseVideo(videoInner, video, videoButton) {
	videoInner.onclick = () => {
		if(video.paused) {
			video.play();
			videoButton.style.display = 'none';
		}
		else {
			videoButton.style.display = 'block';
		}
	}
	video.onpause = () => {
		videoButton.style.display = 'block';
	}
	video.onplaying  = () => {
		videoButton.style.display = 'none';
	}

}
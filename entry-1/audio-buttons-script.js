document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const muteButton = document.getElementById('muteButton');
    const unmuteButton = document.getElementById('unmuteButton');
    const volumeUpButton = document.getElementById('volumeUpButton');
    const volumeDownButton = document.getElementById('volumeDownButton');

    // Function to mute the video
    muteButton.addEventListener('click', () => {
        video.muted = true;
    });

    // Function to unmute the video
    unmuteButton.addEventListener('click', () => {
        video.muted = false;
    });

    // Function to increase volume
    volumeUpButton.addEventListener('click', () => {
        if (video.volume < 1) {
            video.volume = Math.min(video.volume + 0.1, 1);
        }
    });

    // Function to decrease volume
    volumeDownButton.addEventListener('click', () => {
        if (video.volume > 0) {
            video.volume = Math.max(video.volume - 0.1, 0);
        }
    });
});

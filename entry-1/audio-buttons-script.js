document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.myVideo');
    const muteButton = document.getElementById('muteButton');
    const unmuteButton = document.getElementById('unmuteButton');
    const volumeUpButton = document.getElementById('volumeUpButton');
    const volumeDownButton = document.getElementById('volumeDownButton');

    // Function to mute all videos
    muteButton.addEventListener('click', () => {
        videos.forEach(video => {
            video.muted = true;
        });
    });

    // Function to unmute all videos
    unmuteButton.addEventListener('click', () => {
        videos.forEach(video => {
            video.muted = false;
        });
    });

    // Function to increase volume of all videos
    volumeUpButton.addEventListener('click', () => {
        videos.forEach(video => {
            if (video.volume < 1) {
                video.volume = Math.min(video.volume + 0.1, 1);
            }
        });
    });

    // Function to decrease volume of all videos
    volumeDownButton.addEventListener('click', () => {
        videos.forEach(video => {
            if (video.volume > 0) {
                video.volume = Math.max(video.volume - 0.1, 0);
            }
        });
    });
});
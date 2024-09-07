  function toggleMute(videoId) {
            var video = document.getElementById(videoId);
            video.muted = !video.muted;
            var button = video.nextElementSibling;
            button.textContent = video.muted ? 'Unmute ' + videoId.replace('video', 'Video ') : 'Mute ' + videoId.replace('video', 'Video ');
        }

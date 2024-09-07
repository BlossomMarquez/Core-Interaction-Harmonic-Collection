function toggleMute(videoId) {
    var videoElement = document.getElementById(videoId);
    // Toggle mute state
    videoElement.muted = !videoElement.muted;
    // Optionally, update the button text to reflect the current state
    var button = Array.from(document.querySelectorAll('button')).find(btn => btn.getAttribute('onclick').includes(videoId));
    button.textContent = videoElement.muted ? `unmute ${videoId.replace('video', 'video ')}` : `mute ${videoId.replace('video', 'video ')}`;
}

// Initialize button text
document.querySelectorAll('button').forEach(btn => {
    const videoId = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    const videoElement = document.getElementById(videoId);
    btn.textContent = videoElement.muted ? `unmute ${videoId.replace('video', 'video ')}` : `mute ${videoId.replace('video', 'video ')}`;
});
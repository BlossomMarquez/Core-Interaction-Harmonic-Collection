const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseleave', () => {
    video.play();
  });
  
  video.addEventListener('mouseenter', () => {
    video.pause();
    video.currentTime = 0;
  });
});

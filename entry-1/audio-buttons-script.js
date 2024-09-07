        document.addEventListener('DOMContentLoaded', () => {
            const unmuteAllButton = document.getElementById('unmuteAllButton');
            const muteAllButton = document.getElementById('muteAllButton');
            const volumeUpButton = document.getElementById('volumeUpButton');
            const volumeDownButton = document.getElementById('volumeDownButton');

            // Function to unmute all videos
            const unmuteAllVideos = () => {
                document.querySelectorAll('video').forEach(video => {
                    video.muted = false;    
                });
            };

            // Function to mute all videos
            const muteAllVideos = () => {
                document.querySelectorAll('video').forEach(video => {
                    video.muted = true;
                });
            };

          
            // Function to increase volume of all videos
            const increaseVolume = () => {
                document.querySelectorAll('video').forEach(video => {
                    if (video.volume < 1) {
                        video.volume = Math.min(video.volume + 0.1, 1);
                    }
                });
                volumeSlider.value = Math.min(parseFloat(volumeSlider.value) + 0.1, 1);
            };

            // Function to decrease volume of all videos
            const decreaseVolume = () => {
                document.querySelectorAll('video').forEach(video => {
                    if (video.volume > 0) {
                        video.volume = Math.max(video.volume - 0.1, 0);
                    }
                });
                volumeSlider.value = Math.max(parseFloat(volumeSlider.value) - 0.1, 0);
            };

            // Function to update volume of all videos based on slider
            const updateVolumeFromSlider = () => {
                const newVolume = parseFloat(volumeSlider.value);
                document.querySelectorAll('video').forEach(video => {
                    video.volume = newVolume;
                });
            };

            // Attach event listeners
            unmuteAllButton.addEventListener('click', unmuteAllVideos);
            muteAllButton.addEventListener('click', muteAllVideos);
            volumeUpButton.addEventListener('click', increaseVolume);
            volumeDownButton.addEventListener('click', decreaseVolume);
            volumeSlider.addEventListener('input', updateVolumeFromSlider);

            // Initialize slider to match the volume of the first video
            const initialVolume = document.querySelector('video')?.volume || 0.5;
            volumeSlider.value = initialVolume;
        });
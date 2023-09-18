document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('iframe');
    const content = document.getElementById('content');
    let player;

    // Carregar a API do YouTube
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Função chamada quando a API do YouTube estiver pronta
    window.onYouTubeIframeAPIReady = function () {
        player = new YT.Player('video-container', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            setTimeout(checkVideoProgress, 1000);
        }
    }

    function checkVideoProgress() {
        const currentTime = player.getCurrentTime();
        const duration = player.getDuration();

        // Defina 90% do vídeo como o ponto de disparo
        const triggerPoint = 0.9 * duration;

        if (currentTime >= triggerPoint) {
            content.style.display = 'block';
        } else {
            setTimeout(checkVideoProgress, 1000);
        }
    }
});

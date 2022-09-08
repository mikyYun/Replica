const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videoId = "OdFr7wd-DWA";

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: videoId,
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: videoId
    },
    events: {
      onReady: (event) => {
        event.target.mute();
      }
    }
  });
}
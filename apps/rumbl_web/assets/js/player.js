let Player = {
    player: null,

    init(domId, playerId, onReady) {
        window.onYouTubeIframeAPIReady = () => {
            this.onIframeReady(domId, playerId, onReady)
        }
        let youtubeScriptTag = document.createElement("script")
        youtubeScriptTag.src = "https://youtube.com/iframe_api"
        document.head.appendChild(youtubeScriptTag)
    },
    onIframeReady(domId, playerId, onReady) {
        this.player = new YT.Player(domId, {
            height: "360",
            width: "420",
            videoId: playerId,
            events: {
                "onReady": onReady,
                "onStateChange": event => this.onPlayerStateChange(event)
            }
        })
    },
    onPlayerStateChange(event) { },
    getCurrentTime() {
        return Math.floor(this.player.getCurrentTime() * 1000)
    },
    seekTo(millsec) {
        this.player.seekTo(millsec / 1000)
    }
}

export default Player
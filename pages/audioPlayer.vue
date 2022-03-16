<template>
  <div>
    <audio id="player" controls>
      <source src="https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div @click="play">
      播放
    </div>
    <div @click="pause">
      暫停
    </div>
    <div @click="fastFifteen">
      快進15s
    </div>
    <div @click="backFifteen">
      倒退15s
    </div>
    <div>
      <input
        id="volume"
        type="range"
        name="volume"
        :value="song.volume * 100"
        min="0"
        max="100"
        step="1"
        @input="voice"
      >
      <label for="volume">volume</label>
    </div>
    <div id="panel" class="border-2 mt-4" />
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data () {
    return {
      song: ''
    }
  },
  /* eslint-disable */
  watch: {
    // song: {
    //   handler: function () {
    //     console.log('hi')
    //   },
    //   deep: true
    // }
  },
  /* eslint-enable */
  mounted () {
    this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    this.testInfo()
    // this.song.loop = true
  },
  methods: {
    voice (e) {
      console.log(e.target.value)
      const volume = e.target.value / 100
      this.song.volume = volume
    },
    play () {
      this.song.play()
      console.log(this.song.currentTime)
    },
    pause () {
      this.song.pause()
      console.log(this.song.currentTime)
    },
    fastFifteen () {
      this.song.currentTime += 15
      console.log(this.song.currentTime)
    },
    backFifteen () {
      this.song.currentTime -= 15
      console.log(this.song.currentTime)
    },
    testInfo () {
      const player = document.getElementById('player')
      const map = ['error', 'src', 'currentSrc', ' networkState', 'readyState', 'preload', 'buffered', 'played', 'seekable', 'seeking', 'currentTime', 'startTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'ended', 'autoplay', 'loop', 'controls', 'volume', 'muted']
      window.setInterval(function () {
        let str = ''
        for (let i = 0, j = map.length; i < j; i++) {
          str += map[i] + ' : ' + player[map[i]] + '<br>\n'
        }
        document.getElementById('panel').innerHTML = str
      }, 1000)
    }
  }
}
</script>

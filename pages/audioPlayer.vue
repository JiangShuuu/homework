<template>
  <div>
    <div @click="play">
      播放
    </div>
    <div @click="song.pause()">
      暫停
    </div>
    <div>
      <input
        id="volume"
        type="range"
        name="cowbell"
        value="0"
        min="0"
        max="100"
        step="1"
        @input="voice"
      >
      <label for="volume">volume</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data () {
    return {
      song: new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    }
  },
  /* eslint-disable */
  watch: {
    'song.currentTime': {
      handler: function () {
        console.log('hi')
      },
      deep: true
    }
  },
  /* eslint-enable */
  mounted () {
    this.song.loop = true
    console.log(this.song.currentTime)
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
    }
    // test () {
    //   // const player = document.getElementById('player')
    //   // const map = ['error', 'src', 'currentSrc', ' networkState', 'readyState', 'preload', 'buffered', 'played', 'seekable', 'seeking', 'currentTime', 'startTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'ended', 'autoplay', 'loop', 'controls', 'volume', 'muted']
    //   // window.setInterval(function () {
    //   //   let str = ''
    //   //   for (let i = 0, j = map.length; i < j; i++) {
    //   //     str += map[i] + ' : ' + player[map[i]] + '<br>\n'
    //   //   }
    //   //   document.getElementById('panel').innerHTML = str
    //   // }, 1000)
    // }
  }
}
</script>

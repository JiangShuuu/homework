<template>
  <div>
    <audio id="player" ref="audio" controls>
      <source :src="music[0]" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="cursor-pointer" @click="play">
      播放
    </div>
    <div class="cursor-pointer" @click="pause">
      暫停
    </div>
    <div class="cursor-pointer" @click="fastFifteen">
      快進15s
    </div>
    <div class="cursor-pointer" @click="backFifteen">
      倒退15s
    </div>
    <!-- eslint-disable -->
    <ul class="flex">
      <p>速度</p>
      <li class="ml-2 cursor-pointer" @click="$refs.audio.playbackRate = 0.5">0.5</li>
      <li class="ml-2 cursor-pointer" @click="$refs.audio.playbackRate = 1">1</li>
      <li class="ml-2 cursor-pointer" @click="$refs.audio.playbackRate = 2">2</li>
    </ul>
    <!-- eslint-enable -->
    <div>
      <input
        id="volume"
        type="range"
        name="volume"
        :value="audioVolume"
        min="0"
        max="100"
        step="1"
        class="cursor-pointer"
        :disabled="muteState"
        @input="voice"
      >
      <label for="volume">volume</label>
    </div>
    <div class="cursor-pointer" @click="muted">
      靜音
    </div>
    <div id="panel" class="border-2 mt-4" />
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  auth: false,
  data () {
    return {
      audioVolume: null,
      muteState: false,
      music: [
        'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3'
      ],
      duration: null
    }
  },
  mounted () {
    // this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    // this.song.loop = true
    this.testInfo()
    this.audioVolume = this.$refs.audio.volume * 100
  },
  methods: {
    voice (e) {
      console.log(e.target.value)
      const volume = e.target.value / 100
      this.$refs.audio.volume = volume
    },
    play () {
      this.$refs.audio.play()
      console.log(this.$refs.audio.currentTime)
    },
    pause () {
      this.$refs.audio.pause()
      console.log(this.$refs.audio.currentTime)
    },
    fastFifteen () {
      this.$refs.audio.currentTime += 15
      console.log(this.$refs.audio.currentTime)
    },
    backFifteen () {
      this.$refs.audio.currentTime -= 15
      console.log(this.$refs.audio.currentTime)
    },
    muted () {
      this.$refs.audio.muted = !this.$refs.audio.muted
      this.muteState = !this.muteState
    },
    testInfo () {
      const player = this.$refs.audio
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

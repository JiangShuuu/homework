<template>
  <div>
    <audio id="player" ref="audio" controls>
      <source :src="musicUrl" type="audio/mpeg">
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
    <div class="cursor-pointer" @click="prevMusic">
      上一首
    </div>
    <div class="cursor-pointer" @click="nextMusic">
      下一首
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
    <VueSlider v-model="value" @change="procssBar" />
    <div class="cursor-pointer" @click="muted">
      靜音
    </div>
    <div id="panel" class="border-2 mt-4" />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'AudioPlayer',
  auth: false,
  components: {
    VueSlider // eslint-disable-line
  },
  data () {
    return {
      audioVolume: null,
      muteState: false,
      music: [
        'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
        'https://static.dazedbear.pro/2018-ithome/Sinking_Ship.mp3',
        'https://static.dazedbear.pro/2018-ithome/It_s_All_Happening.mp3'
      ],
      musicIndex: 0,
      musicUrl: 'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
      duration: null,
      value: 0,
      audio: ''
    }
  },
  mounted () {
    // this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    // this.song.loop = true
    this.audioVolume = this.$refs.audio.volume * 100
    // const player = window.document.getElementById('player')
    // player.ontimeupdate(() => {
    //   console.log('a')
    // })
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
    nextMusic () {
      this.musicIndex++
      if (this.musicIndex > this.music.length - 1) {
        this.musicIndex = 0
      }
      this.musicUrl = this.music[this.musicIndex]
      this.$refs.audio.load()
      this.$refs.audio.play()
    },
    prevMusic () {
      this.musicIndex--
      if (this.musicIndex < 0) {
        this.musicIndex = this.music.length - 1
      }
      this.musicUrl = this.music[this.musicIndex]
      this.$refs.audio.load()
      this.$refs.audio.play()
    },
    procssBar (e) {
      console.log(e)
      console.log('hi')
      const duration = this.$refs.audio.duration
      const total = this.$refs.audio.currentTime
      console.log('duration', duration)
      console.log('total', total)
    },
    testInfo () {
      // const player = this.$refs.audio
      // const map = ['error', 'src', 'currentSrc', ' networkState', 'readyState', 'preload', 'buffered', 'played', 'seekable', 'seeking', 'currentTime', 'startTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'ended', 'autoplay', 'loop', 'controls', 'volume', 'muted']
      // let str = ''
      // for (let i = 0, j = map.length; i < j; i++) {
      //   str += map[i] + ' : ' + player[map[i]] + '<br>\n'
      // }
      // document.getElementById('panel').innerHTML = str
    }
  }
}
</script>

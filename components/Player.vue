<template>
  <div>
    <audio id="player" ref="audio" controls>
      <source :src="musicUrl" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="mt-4">
      <button class="p-1 border-blue-700 border-2" :class="{'cantstyle': cantplay }" @click="play">
        播放
      </button>
      <button class="p-1 border-blue-700 border-2" @click="pause">
        暫停
      </button>
      <button class="p-1 border-blue-700 border-2" @click="fastFifteen">
        快進15s
      </button>
      <button class="p-1 border-blue-700 border-2" @click="backFifteen">
        倒退15s
      </button>
      <button class="p-1 border-blue-700 border-2" @click="prevMusic">
        上一首
      </button>
      <button class="p-1 border-blue-700 border-2" @click="nextMusic">
        下一首
      </button>
      <ul class="flex mt-2">
        <p>速度</p>
        <button class="p-1 ml-4 border-blue-700 border-2" @click="$refs.audio.playbackRate = 0.5">
          0.5
        </button>
        <button class="p-1 ml-2 border-blue-700 border-2" @click="$refs.audio.playbackRate = 1">
          1
        </button>
        <button class="p-1 ml-2 border-blue-700 border-2" @click="$refs.audio.playbackRate = 2">
          2
        </button>
      </ul>
    </div>
    <div>
      <input
        id="volume"
        type="range"
        name="volume"
        :value="audioVolume"
        min="0"
        max="1"
        step="0.01"
        class="cursor-pointer"
        :disabled="muteState"
        @input="voice"
      >
      <label for="volume">volume</label>
    </div>
    {{ currentTime }}
    <vue-slider v-model="value" @change="procssBar" />
    <button class="p-1 border-blue-700 border-2" @click="muted">
      靜音
    </button>
    <div id="panel" class="border-2 mt-4" />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'AudioPlayer',
  components: {
    'vue-slider': VueSlider
  },
  data () {
    return {
      audioVolume: 0,
      muteState: false,
      music: [
        'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
        'https://static.dazedbear.pro/2018-ithome/Sinking_Ship.mp3',
        'https://static.dazedbear.pro/2018-ithome/It_s_All_Happening.mp3',
        '12321321'
      ],
      musicIndex: 0,
      musicUrl: 'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
      duration: null,
      value: 0,
      currentTime: '',
      cantplay: false
    }
  },
  mounted () {
    // this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    // this.song.loop = true
    this.audioVolume = this.$refs.audio.volume
    this.update()
  },
  methods: {
    // time () {
    //   const currentTime = this.$refs.audio.currentTime
    //   this.current
    // },
    update () {
      this.$refs.audio.ontimeupdate = () => {
        this.audioInfo()
        this.procssBarUpdate()
      }
      this.$refs.audio.oncanplay = () => {
        this.cantplay = false
        this.$refs.audio.play()
      }
    },
    voice (e) {
      console.log(e.target.value)
      const volume = e.target.value
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
      this.$refs.audio.pause()
      this.value = 0
      this.musicIndex++
      if (this.musicIndex > this.music.length - 1) {
        this.musicIndex = 0
      }
      this.musicUrl = this.music[this.musicIndex]
      this.$refs.audio.load()
      this.cantplay = true
    },
    prevMusic () {
      this.$refs.audio.pause()
      this.musicIndex--
      if (this.musicIndex < 0) {
        this.musicIndex = this.music.length - 1
      }
      this.musicUrl = this.music[this.musicIndex]
      this.$refs.audio.load()
    },
    // 進度條更新
    procssBarUpdate () {
      const currentTime = this.$refs.audio.currentTime
      const duration = this.$refs.audio.duration
      console.log(duration, currentTime)
      if (Number.isFinite(duration)) {
        const percentage = currentTime / duration * 100
        this.value = percentage
      }
    },
    // 進度條拖曳
    procssBar (e) {
      const duration = this.$refs.audio.duration
      this.$refs.audio.currentTime = e / 100 * duration
    },
    audioInfo () {
      const player = this.$refs.audio
      const map = ['error', 'src', 'currentSrc', ' networkState', 'readyState', 'preload', 'buffered', 'played', 'seekable', 'seeking', 'currentTime', 'startTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'ended', 'autoplay', 'loop', 'controls', 'volume', 'muted']
      let str = ''
      for (let i = 0, j = map.length; i < j; i++) {
        str += map[i] + ' : ' + player[map[i]] + '<br>\n'
      }
      document.getElementById('panel').innerHTML = str
    }
  }
}
</script>
<style scoped>
.cantstyle {
  background-color: gray;
  color: white
}
</style>

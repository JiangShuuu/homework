<template>
  <div>
    <audio ref="audio" controls>
      <source :src="musicUrl" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="mt-4">
      <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="play">
        播放
      </button>
      <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="pause">
        暫停
      </button>
      <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="fastFifteen">
        快進15s
      </button>
      <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="backFifteen">
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
        <button class="p-1 ml-4 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="$refs.audio.playbackRate = 0.5">
          0.5
        </button>
        <button class="p-1 ml-2 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="$refs.audio.playbackRate = 1">
          1
        </button>
        <button class="p-1 ml-2 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="$refs.audio.playbackRate = 2">
          2
        </button>
      </ul>
    </div>
    <div>
      <input
        id="volume"
        v-model="audioVolume"
        type="range"
        name="volume"
        min="0"
        max="1"
        step="0.01"
        class="cursor-pointer"
        :disabled="cantplay"
        @input="changeVolume"
      >
      <label for="volume">volume</label>
    </div>
    <vue-slider v-model="procss" @change="procssBar" />
    <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="muted">
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
      music: [
        'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
        'https://static.dazedbear.pro/2018-ithome/Sinking_Ship.mp3',
        'https://static.dazedbear.pro/2018-ithome/It_s_All_Happening.mp3',
        'NoMusieTest'
      ],
      audio: null,
      audioVolume: 100,
      musicIndex: 0,
      musicUrl: 'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
      procss: 0,
      cantplay: false
    }
  },
  mounted () {
    // this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    // this.song.loop = true
    this.audio = this.$refs.audio
    this.state()
  },
  methods: {
    state () {
      this.audio.ontimeupdate = () => {
        this.audioInfo()
        this.procssBarUpdate()
      }
      this.audio.oncanplay = () => {
        this.cantplay = false
        // this.audio.play()
      }
      this.audio.onvolumechange = () => {
        if (this.audio.muted) {
          this.audioVolume = 0
        }
        if (!this.audio.muted) {
          this.audioVolume = this.audio.volume
        }
      }
    },
    changeVolume () {
      this.audio.volume = this.audioVolume
    },
    play () {
      this.audio.play()
    },
    pause () {
      this.audio.pause()
    },
    fastFifteen () {
      this.audio.currentTime += 15
    },
    backFifteen () {
      this.audio.currentTime -= 15
    },
    muted () {
      this.audio.muted = !this.audio.muted
    },
    nextMusic () {
      this.audio.pause()
      this.procss = 0
      this.musicIndex++
      if (this.musicIndex > this.music.length - 1) {
        this.musicIndex = 0
      }
      this.musicUrl = this.music[this.musicIndex]
      this.audio.load()
      this.cantplay = true
    },
    prevMusic () {
      this.audio.pause()
      this.procss = 0
      this.musicIndex--
      if (this.musicIndex < 0) {
        this.musicIndex = this.music.length - 1
      }
      this.musicUrl = this.music[this.musicIndex]
      this.audio.load()
      this.cantplay = true
    },
    // 進度條更新
    procssBarUpdate () {
      const currentTime = this.audio.currentTime
      const duration = this.audio.duration
      if (Number.isFinite(duration)) {
        const percentage = currentTime / duration * 100
        this.procss = percentage
      }
    },
    // 進度條拖曳
    procssBar (e) {
      const duration = this.$refs.audio.duration
      this.audio.currentTime = e / 100 * duration
    },
    audioInfo () {
      const player = this.audio
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

<template>
  <div>
    <audio ref="audio" style="width: 800px" controls>
      <source :src="currentMusic.url" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <div class="mt-4">
      <div class="flex">
        <div>
          <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="audio.play()">
            播放
          </button>
          <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="audio.pause()">
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
        </div>
        <ul class="flex ml-4 items-center">
          <p>速度</p>
          <button class="p-1 ml-4 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay , 'active': audio.playbackRate === 0.5}" @click="$refs.audio.playbackRate = 0.5">
            0.5
          </button>
          <button class="p-1 ml-2 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay, 'active': audio.playbackRate === 1 }" @click="$refs.audio.playbackRate = 1">
            1
          </button>
          <button class="p-1 ml-2 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay, 'active': audio.playbackRate === 2 }" @click="$refs.audio.playbackRate = 2">
            2
          </button>
        </ul>
      </div>
      <ul class="my-4 flex">
        <li v-for="music in musicList" :key="music.id" class="flex items-center p-2 mr-4 border-2">
          <div class="w-20 h-20">
            <img class="w-full h-full object-cover" :src="music.image" alt="">
          </div>
          <p class="m-4">
            {{ music.title }}
          </p>
          <button class="p-1 border-blue-700 border-2" @click="changeMusic(music)">
            按我
          </button>
        </li>
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
      <button class="p-1 border-blue-700 border-2" :disabled="cantplay" :class="{'cantstyle': cantplay }" @click="muted">
        靜音
      </button>
    </div>
    <div>{{ currentTime() }} / {{ durationTime() }}</div>
    <vue-slider v-model="procss" :process="buffer" @change="procssBar" />
    <div>歌曲：{{ log.name }} / 相差：{{ log.diff }} 秒</div>
    <div id="panel" class="border-2 mt-2" />
    <!-- <button @click="test">
      test
    </button> -->
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
      currentMusic: {
        id: '',
        title: '',
        url: '',
        image: ''
      },
      musicList: [
        {
          id: '1',
          title: '歌曲一',
          url: 'https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3',
          image: 'https://images.unsplash.com/photo-1647504275162-3117c4f0cea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
          id: '2',
          title: '歌曲二',
          url: 'https://static.dazedbear.pro/2018-ithome/Sinking_Ship.mp3',
          image: 'https://images.unsplash.com/photo-1640622841908-3a691b7b7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80'
        },
        {
          id: '3',
          title: '歌曲三',
          url: 'https://static.dazedbear.pro/2018-ithome/It_s_All_Happening.mp3',
          image: 'https://images.unsplash.com/photo-1647462522463-bc83fd437617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
          id: '4',
          title: '歌曲四',
          url: 'NoMusieTest',
          image: 'https://images.unsplash.com/photo-1647470570244-4c46e63384f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        }
      ],
      audio: {
        duration: 0,
        playbackRate: 1
      },
      audioVolume: 100,
      musicIndex: 0,
      procss: 0,
      bufferState: 0,
      cantplay: false,
      rate: 0,
      log: {
        active: false,
        id: '',
        name: '',
        start: 0,
        end: 0,
        diff: 0,
        ts: 0,
        te: 0
      },
      buffer: dotsPos => [
        [dotsPos[0], this.bufferState, { backgroundColor: 'pink' }],
        [0, dotsPos[0], { backgroundColor: 'blue' }]
      ]
    }
  },
  head () {
    return {
      title: this.currentMusic.title,
      meta: [
        {
          hid: 'playerPage',
          name: 'playerPage',
          content: '這是播放器頁面'
        }
      ]
    }
  },
  created () {
    this.currentMusic = this.musicList[0]
  },
  mounted () {
    // this.song = new Audio('https://static.dazedbear.pro/2018-ithome/Swing_Theory.mp3')
    // this.song.loop = true
    this.audio = this.$refs.audio
    this.state()
    this.mediaMeta()
    window.addEventListener('beforeunload', this.endCount)
  },
  destroyed () {
    window.removeEventListener('beforeunload', this.endCount)
  },
  methods: {
    state () {
      this.audio.ontimeupdate = () => {
        this.audioInfo()
        this.procssBarUpdate()
      }
      this.audio.oncanplay = () => {
        this.cantplay = false
        this.mediaMeta()
      }
      this.audio.onvolumechange = () => {
        if (this.audio.muted) {
          this.audioVolume = 0
        }
        if (!this.audio.muted) {
          this.audioVolume = this.audio.volume
        }
      }
      // buffer
      this.audio.onprogress = () => {
        if (Number.isNaN(this.audio.duration)) {
          return
        }
        const end = this.audio.buffered.end(this.audio.buffered.length - 1)
        this.bufferState = Math.ceil(end / this.audio.duration * 100)
      }
      this.audio.onplaying = () => {
        // 播放時計算
        this.startCount()
      }
      this.audio.onpause = () => {
        this.endCount()
      }
      // seek
      this.audio.onseeked = () => {
        console.log('onseek停止計')
        this.endCount()
      }
      // seeking
      this.audio.onseeking = () => {
        console.log('seeking開始計')
        this.startCount()
      }
      this.audio.onended = () => {
        this.nextMusic()
        this.audio.play()
      }
      // rate
      this.audio.onratechange = () => {
        this.audio.playbackRate = this.$refs.audio.playbackRate
      }
    },
    mediaMeta () {
      if ('mediaSession' in navigator) {
        // eslint-disable-next-line no-undef
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.currentMusic.title,
          artist: 'Nat King Cole',
          album: this.currentMusic.title,
          artwork: [
            { src: this.currentMusic.image, sizes: '512x512', type: 'image/png' }
          ]
        })
        navigator.mediaSession.setActionHandler('play', () => {
          this.player()
          navigator.mediaSession.playbackState = 'playing'
        })
        navigator.mediaSession.setActionHandler('pause', () => {
          this.pause()
          navigator.mediaSession.playbackState = 'paused'
        })
        navigator.mediaSession.setActionHandler('stop', () => { /* Code excerpted. */ })
        navigator.mediaSession.setActionHandler('seekbackward', () => { this.backFifteen() })
        navigator.mediaSession.setActionHandler('seekforward', () => { this.fastFifteen() })
        navigator.mediaSession.setActionHandler('seekto', (e) => {
          this.audio.currentTime = e.seekTime
          this.updatePositionState()
        })
        navigator.mediaSession.setActionHandler('previoustrack', () => { this.prevMusic() })
        navigator.mediaSession.setActionHandler('nexttrack', () => { this.nextMusic() })
      }
    },
    // 開始計算
    startCount () {
      this.log.active = true
      this.log.id = this.currentMusic.id
      this.log.name = this.currentMusic.title
      // 目前時間
      this.log.ts = Date.now()
      this.log.start = this.audio.currentTime
      console.log('開始計', this.log)
    },
    // 結束計算
    endCount () {
      if (!this.log.active) {
        return
      }

      this.log.te = Date.now()
      this.log.end = this.audio.currentTime
      const count = this.log.end - this.log.start
      this.log.diff += count

      if (this.log.diff < 2) {
        return
      }

      console.log('停止計', this.log)
      console.log('相差', this.log.diff)

      this.log.diff = 0
      this.log.active = false
    },
    updatePositionState () {
      if ('setPositionState' in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: this.audio.duration,
          playbackRate: this.audio.playbackRate,
          position: this.audio.currentTime
        })
      }
    },
    currentTime () {
      const time = Math.floor(this.audio.currentTime)
      const min = new Date(time * 1000).getMinutes()
      const sec = new Date(time * 1000).getSeconds()
      const realSec = sec.toString().padStart(2, '0')
      return `${min}:${realSec}`
    },
    durationTime () {
      const time = Math.floor(this.audio.duration)
      if (isNaN(time)) {
        return '0:00'
      }
      const min = new Date(time * 1000).getMinutes()
      const sec = new Date(time * 1000).getSeconds()
      const realSec = sec.toString().padStart(2, '0')
      return `${min}:${realSec}`
    },
    changeVolume () {
      this.audio.volume = this.audioVolume
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
    changeMusic (music) {
      this.audio.pause()
      this.procss = 0
      this.currentMusic = music
      this.audio.load()
      this.cantplay = true
    },
    nextMusic () {
      this.audio.pause()
      this.endCount()
      this.procss = 0
      this.musicIndex++
      if (this.musicIndex > this.musicList.length - 1) {
        this.musicIndex = 0
      }
      this.currentMusic = this.musicList[this.musicIndex]
      this.audio.load()
      this.cantplay = true
    },
    prevMusic () {
      this.audio.pause()
      this.endCount()
      this.procss = 0
      this.musicIndex--
      if (this.musicIndex < 0) {
        this.musicIndex = this.musicList.length - 1
      }
      this.currentMusic = this.musicList[this.musicIndex]
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
      const duration = this.audio.duration
      this.audio.currentTime = e / 100 * duration
    },
    // audio相關資訊
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
.active {
  background-color: blue;
  color: white
}
</style>

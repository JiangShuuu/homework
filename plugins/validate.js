import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
// import {} from 'vee-validate/dist/rules'
// eslint-disable-next-line camelcase
import zh_TW from 'vee-validate/dist/locale/zh_TW.json'
import Vue from 'vue'

extend('tweet_empty', (value) => {
  let arrStr = value.split('') // 將字串轉換為陣列
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === ' ') {
      arrStr[i] = ''
    }
  }
  arrStr = arrStr.join('')

  if (arrStr.length > 0) {
    return true
  }
  return '內容不可空白'
})

localize('zh_TW', zh_TW)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

/* eslint-disable */

import { ValidationProvider, ValidationObserver, extend, localize } from 'vee-validate'
import zh_TW from 'vee-validate/dist/locale/zh_TW.json'
import Vue from 'vue'
import { email, alpha, alpha_num, required, confirmed, } from 'vee-validate/dist/rules'

extend('email', email)
extend('alpha', alpha)
extend('alpha_num', alpha_num)
extend('required', required)
extend('confirmed', confirmed)

// extend('noempty', (value) => {
//   let arrStr = value.split('') // 將字串轉換為陣列
//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i] === ' ') {
//       arrStr[i] = ''
//     }
//   }
//   arrStr = arrStr.join('')

//   if (arrStr.length > 0) {
//     return true
//   }
//   return '內容不可空白'
// })

localize('zh_TW', zh_TW)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

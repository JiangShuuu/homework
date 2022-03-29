<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: 'RegexPage',
  auth: false,
  data () {
    return {
      test: ''
    }
  },
  mounted () {
    this.test01()
  },
  methods: {
    test01 () {
      const regex = /hello world/i
      this.test = regex.exec('Hello world !!')
      const str = 'Rails is a web framework written in Ruby'
      const a = str.exec('is')
      console.log(a)
    }
  }
}
</script>

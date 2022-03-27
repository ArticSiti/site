
<template>
  <div id="content">
    <Signup />
  </div>
</template>

<script>
import vueConfig from 'vue-config'
import Media from './assets/css/media.css'
import Signup from './components/Signup.vue'
import { devtools, devtools } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    Signup
  }
}
devtools = true
</script>

<style >

</style>

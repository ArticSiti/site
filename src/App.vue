
<template>
  <div id="content">
    <Signup />
  </div>
</template>

<script>
Vue.config.devtools = true
import Media from './assets/css/media.css'
import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    Signup
  }
}
</script>

<style >

</style>

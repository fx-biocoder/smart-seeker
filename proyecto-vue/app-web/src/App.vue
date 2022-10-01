<template>
  <div id="app">
    <Mi_Componente />
    <App_Homepage />
    <app_section_1 />
    <app_section_2 />
    <app_section_3 /> 
    <app_section_4 />
  </div>
</template>

<script>
import Mi_Componente from './components/Mi_Componente.vue'
import App_Homepage from './components/app_homepage.vue'
import app_section_1 from './components/app_section_1.vue'
import app_section_2 from './components/app_section_2.vue'
import app_section_3 from './components/app_section_3.vue'
import app_section_4 from './components/app_section_4.vue'

export default {
  name: 'app',
  components: {
    Mi_Componente,
    App_Homepage,
    app_section_1,
    app_section_2,
    app_section_3,
    app_section_4
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

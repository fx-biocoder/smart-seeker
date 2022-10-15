node <template>
  <div class="app">
    <router-view />
    <App_Navigation />
    <App_Homepage />
    <app_section_1 />
    <app_section_2 />
    <app_section_3 /> 
    <app_section_4 />
  </div>
</template>

<script>
import App_Navigation from './components/app_navigation.vue'
import App_Homepage from './components/app_homepage.vue'
import app_section_1 from './components/app_section_1.vue'
import app_section_2 from './components/app_section_2.vue'
import app_section_3 from './components/app_section_3.vue'
import app_section_4 from './components/app_section_4.vue'


export default {
  name: 'app',
  components: {
    App_Navigation,
    App_Homepage,
    app_section_1,
    app_section_2,
    app_section_3,
    app_section_4,
    
}
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.app {
  min-height: 100vh;
  position: relative;
}

.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}


</style>

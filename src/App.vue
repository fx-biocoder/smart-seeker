<template>
  <div class="app">
    <App_navigation />
    <transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view />
    </transition>
  </div>
  
  
</template>

<script>
import App_navigation from "./components/app_navigation.vue";

export default {
    name: "app",
    components: { App_navigation }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  display: none;
}

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

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

/*
  .page {
    position: fixed;
    width: inherit;
  }
*/
</style>

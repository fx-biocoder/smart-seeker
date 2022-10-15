
<template>
  <div class="app_section_1">
    <section id="section-1">
        <h2>Carga de archivos </h2>
        <div class="drop-area">             
            <h2>Arrastre y suelte archivos</h2>
            <span>O</span>
            <button>Seleccione sus archivos</button>
            <input type="file" accept="text/*,.afa" name="" id="input-file" hidden multiple>
        </div>
        <div id="preview"></div>
    </section>
  </div>
</template>

<script>
    export default {
        name: 'app_section_1',
        mounted() {
            let section1_script = document.createElement('script')
            section1_script.setAttribute('src', '/js/section1.js')
            document.head.appendChild(section1_script)
        }
        }
</script>

<style>

</style>
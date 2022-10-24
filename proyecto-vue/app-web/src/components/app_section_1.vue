
<template>
  <div class="app_section_1">
    <section id="section-1">  
      <h2>Files Load </h2>
      <br>
      <div class="drop-area">
        <h2>Drag and Drop your files</h2>
        <span>Or</span>
        <button>Select your files</button>
        <input type="file" accept="text/*,.afa" name="" id="input-file" hidden multiple>
      </div>
      <div id="preview"></div>
      <div class="instrucciones">
        <h5>Loading instructions</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius ab architecto, mollitia reprehenderit sit alias commodi quos consequatur eum ad eveniet. Facilis possimus fugit nisi dicta accusantium vero repudiandae?</p>
      </div>
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

#section-1 {
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;

  /*Formato tipo tarjetas*/
  margin: 2%;
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(201, 200, 200);

}

.instrucciones {
  width: 100%;
  text-align: center;
}

.instrucciones p {
  font-size: 1rem;

}

.drop-area {
  border: 5px dashed #ddd;
  height: 50%;
  width: 70%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
}

.drop-area.active {
  background-color: #b8d4f4;
  color: black;
  border: 2px dashed #618ac9;
}

.drop-area span {
  font-size: 20px;
}

.drop-area button {
  padding: 10px 25px;
  border: 0;
  outline: none;
  background-color: #1C658C;
  color: white;
  border-radius: 100px;
  cursor: pointer;
  margin: 5px;

}

.file-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: solid 1px #ddd;
}

#preview {
  margin-top: 10px;
}

.status-text {
  padding: 0 10px;
}

.success {
  color: #52ad5a;
}

.failure {
  color: #ff0000;
}
</style>
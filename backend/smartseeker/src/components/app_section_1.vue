
<template>
  <div class="app_section_1 page">

    <section id="section-1">
        <h2>Load MSA files</h2>
        <div class="drop-area">             
            <h2>Drag and Drop your files</h2>
            <span>OR</span>
            <button>Select your files</button>
            <input type="file" accept="text/*,.afa" name="" id="input-file" hidden multiple>
        </div>
        <div id="preview"></div>
        <div class="instrucciones">
        <h5>Loading instructions</h5>
        <br />
        <div class="pasos">
          <div class="uno">
            <img src="@/assets/1.png" alt="1">
            <img src="@/assets/click.png" alt="click">
            <p>Click on "Select your files" button</p>
          </div>

          <div class="uno">
            <img src="@/assets/2.png" alt="1">
            <img src="@/assets/archivo.png" alt="file">
            <p>Choose your .afa files</p>
          </div>

          <div class="uno">
            <img src="@/assets/3.png" alt="1">
            <img src="@/assets/nube.png" alt="cloud">
            <p>Send your files</p>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>

    export default {
    name: "app_section_1",
    mounted() {
        let section1_script = document.createElement("script");
        section1_script.setAttribute("src", "/js/section1.js");
        document.head.appendChild(section1_script);
    },

}
</script>

<style scoped>
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
  color: black;
  position: relative;
}
/* Formato para instrucciones*/
.pasos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.uno {
  display: flex;
  flex-flow: column wrap;
 
  
}
.uno p {
  margin: 2%;
  padding: 1%;
  align-self: center;
 
} 
.instrucciones img {
  width: 20%;
}
.instrucciones p {
  font-size: 1rem;
}

.instrucciones[n+1] {
  display: flex;
  justify-content: center;
}

.instrucciones h5 {
  display: flex;
  justify-content: center;
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

@media screen and (max-width:544px) {
  .pasos {
    flex-direction: column;
    justify-content: center;
    font-size: 2vw;
  }

  .uno {
    align-self: center;
    width: 50%;
  }

  h2 {
    text-align: center;
  }

  .instrucciones {
    display: flex;
    flex-direction: column;
  }

  h5 {
    align-self: center;
  }
}

@media screen and (min-width:768px) {

#section-1 {
  flex-direction: row;
  flex-wrap: wrap;
} 
} 

@media screen and (min-width:992px) {
  #section-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;  
  }


}

@media all and (max-width: 800px) {
    .drop-area h2 {
        font-size: 27px;
    }

    .drop-area span {
        font-size: 15px;
    }

}
</style>
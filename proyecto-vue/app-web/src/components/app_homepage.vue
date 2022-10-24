<template>
  <div id="app_homepage">
    <video autoplay loop muted>
      <source src="../assets/video.mp4" type="video/mp4"/>
    </video>
    <div class="portada">
    <!-- Homepage-->
    <!-- Esto sería lo primero que ve el user al entrar al sitio -->
    <!-- Debe contener una imagen o video de fondo, y un botón para ir a la sección siguiente-->
    
    <section class="homepage">
        <div class="titulo">
            <div class="box">
                <h1>Finding ICPs has never been easier</h1>
                <p>With our novel algorithm, you will find inhibitory codon pairs with ease. Forget about creating complex solutions, we've already done it for you.</p>
                <a href="#section-1">Start</a>
            </div>
        </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
    name:'app_homepage',
}
</script>

<style>
.portada {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.titulo {
    text-align: center;
}

.titulo h1 {
    font-size: 50px;
    color: white;
    font-weight: 200;
}

.titulo p {
    color: white;
}

.titulo a {
    text-decoration: none;
    display: inline-block;
    color: rgb(255, 255, 255);
    font-size: 24px;
    border: 2px solid white;
    padding: 14px 70px;
    border-radius: 50px;
    margin-top: 20px;
}

.box {
    background-color: #000;
    color: #fff;
    opacity: 0.7;
    width: 98vw;
    padding: 1vw;
}

video {
  z-index: -100;
  left: 50%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 12%; /* Cambiado de 40% a 30% (Ale 17/10); Cambiado a 12% 23/10*/
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
}
</style>
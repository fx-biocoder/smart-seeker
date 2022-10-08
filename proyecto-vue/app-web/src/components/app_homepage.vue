<template>
  <div id="app_homepage">
    <div class="portada">
    <header class="header">

        <video src="" autoplay loop muted plays-inline class="bg-video" type="video/mp4"></video>
      
        <nav>
            <img src="" class="logo">
            <ul>
                <li><a href="#homepage">HOME</a></li>
                <li><a href="#section-1">LOAD FILES</a></li>
                <li><a href="#section-2">ABOUT THE APP</a></li>
                <li><a href="#section-3">THE TEAM</a></li>
                <li><a href="#section-4">CONTACT</a></li>
            </ul>
        </nav>
       
    </header>

    <!-- Homepage-->
    <!-- Esto sería lo primero que ve el user al entrar al sitio -->
    <!-- Debe contener una imagen o video de fondo, y un botón para ir a la sección siguiente-->
    
    <section class="homepage">
        <div class="titulo">
            <div class="box">>
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
    data () {
        return {

        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.portada {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    color: #fff;
    opacity: 0.7;
}

nav .logo {width: 80px;}

nav ul li {
    list-style: none;
    display: inline-block;
    margin-left: 40px;
}

nav ul li a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-size: 17px;
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

.bg-video {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

}

@media (min-aspect-ratio: 16/9) {
    .bg-video {
        width: 100%;
        height: auto;
    }
}

@media (max-aspect-ratio: 16/9) {
    .bg-video {
        width: auto;
        height: 100%;
    }
}
</style>
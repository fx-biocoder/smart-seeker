<template>
    <div class="app_section_3 page">
        <section id="section-3">

            <div class="titulo">
                <h2 style="font-size: 50px">The Team</h2>
            </div>
            <article class="team">
                <div class="card">
                    <img class="foto" src="@/assets/facu.jpg" alt="Facu">
                    <h3>Facundo Martínez</h3>
                    <h4>Data Analyst | Python Developer</h4>                    
                    <h4>Bioinformatics</h4>
                    <div class="contenedorIconos">
                        <a href="https://www.linkedin.com/in/fxmartinez/" target="_blank" class="brands">
                            <font-awesome-icon class="icono" icon="fa-brands fa-linkedin" size="3x" color="#0e76a8" />
                        </a>
                        <a href="https://github.com/fx-biocoder" class="brands">
                            <font-awesome-icon class="icono" icon="fa-brands fa-github" size="3x" color="black" />
                        </a>    
                    </div>    

                </div>

                <div class="card">
                    <img class="foto" src="@/assets/ale.png" alt="Ale">
                    <h3>Alejandra R. de Cajal</h3>
                    <h4>Fullstack Developer | Food Technologist</h4>
                    <h4>Project Management</h4>
                    <div class="contenedorIconos">                                   
                        <a href="https://www.linkedin.com/in/alejandra-r-de-cajal/" target="_blank" class="brands">
                            <font-awesome-icon class="icono" icon="fa-brands fa-linkedin" size="3x" color="#0e76a8" />
                        </a>
                        <a href="http://github.com/alejandrardecajal" target="_blank" class="brands">
                            <font-awesome-icon class="icono" icon="fa-brands fa-github" size="3x" color="black"/>
                        </a>
                    </div>
                    
                </div>
            </article>

        </section>
    </div>



</template>



<script>
</script>



<style>
#section-3 {
    background-color: #D8D2CB;
    margin: 2%;
    padding: 5%;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgb(201, 200, 200);
    background-image: none;
    color: black;
    height: 90vh;
}
.titulo {
    text-align: center;
    margin: 2%;
    padding: 1%;
}
/*Si modifico la imagen de esta sección, se modifica tambien el logo!! */
.card .foto {
    width: 15vh;
    border-radius: 50%;
    /* background-size: 100% auto; */
}
/* .card a {
    display: flex;
    width: 20%;
    align-self: center;
} */
.team {
    display: flex;
    flex-direction: row;
    margin: 2%;
    justify-content: space-around;
}
.card {
    box-sizing: border-box;
    display: flex;
    flex-flow: column wrap;
    width: 50%;
    border: 1px solid grey;
    border-radius: 4%;
    margin-left: 10%;
    margin-right: 10%;
    padding: 10px;
    box-shadow: 0px 1px 10px rgba(0,0, 0, 0.5);
    background-color: rgb(251, 251, 251);
    overflow: hidden;
    

}
h3,
h4,
img {
    margin: 2%;
    padding: 1%;
    width: max-content;
    align-self: center;
    font-weight: 600;
}
.brands {
    display: contents;
}

.contenedorIconos {
    display: flex;
    justify-content: center;
}

.contenedorIconos .brands .icono{
    padding: 5px;
}

@media all and (max-width: 750px) {
    .team {
        flex-direction: column;
    }

    .card {
        align-self: center;
    }
    }


</style>
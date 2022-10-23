<template>
    <div class="app_section_3">
        <section id="section-3">

            <div class="titulo">
                <h2>The Team</h2>
            </div>
            <article class="team">
                <div class="card">
                    <img src="https://via.placeholder.com/200x227" alt="Facu">
                    <h4>Facundo Martinez</h4>
                    <h5>Data Analyst | Python Developer</h5>                    
                    <h5>Bioinformatician</h5>
                    <a href="https://www.linkedin.com/in/fxmartinez/" target="_blank" id="lin">
                        <img src="@/assets/linkedin.png"  alt="linkedin"></a>

                </div>

                <div class="card">
                    <img src="@/assets/ale.png" alt="Ale">
                    <h4>Alejandra R. de Cajal</h4>
                    <h5>Fullstack Developer Jr. | Food Technologist</h5>
                    <h5>Project Management</h5>                                      
                    <a href="https://www.linkedin.com/in/alejandra-r-de-cajal/" target="_blank" id="lin">
                        <img src="@/assets/linkedin.png"  alt="linkedin"></a>
                    
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
}

.titulo {
    text-align: center;
    margin: 2%;
    padding: 1%;
}

/*Si modifico la imagen de esta sección, se modifica tambien el logo!! */
.card img {

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
    display: flex;
    flex-flow: column wrap;
    width: 50%;
}

h4,
h5,
img {
    margin: 2%;
    padding: 1%;
    width: max-content;
    align-self: center;
    font-weight: 600;
}

#lin{
    display: contents;
   
}

.card a img{
    width: 5vh;
}
</style>
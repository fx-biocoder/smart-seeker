<template>
    <div class="app_section_3">
        <section id="section-3">

            <div class="titulo">
                <h2>The Team</h2>
            </div>
            <article class="team">
                <div class="card">
                    <img src="https://via.placeholder.com/100" alt="Facu">
                    <h4>Facundo Martinez</h4>
                    <h5>Titulo</h5>

                </div>

                <div class="card">
                    <img src="https://via.placeholder.com/100" alt="Ale">
                    <h4>Alejandra R. de Cajal</h4>
                    <h5>Titulo</h5>

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
}
.titulo {
    text-align: center;
    margin: 2%;
    padding: 1%;
}
/*Si modifico la imagen de esta sección, se modifica tambien el logo!! */
img {
    border-radius: 50%;
    /* padding: 20%; */
    width: 100px;
}
.team {
    display: flex;
    flex-direction: row;
    margin: 2%;
    justify-content: space-around;
}
h4, h5 {
    margin: 2%;
    padding: 1%;
   
}
</style>
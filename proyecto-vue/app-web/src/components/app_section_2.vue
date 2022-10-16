<template>
  <div>
    <section id="section-2">
      <div class="titulo">
        <h2>How does the app work?</h2>
      </div>

      <article class="descripcion">
        <div class="col1">
          <p>Esta app calcula las tasas de conservación de codones y pares de codones a través de especies vinculadas
            (como aquellas agrupadas en un mismo género). Para ello, parte de uno o múltiples archivos MSA que contienen
            secuencias de genes homólogos y procede a realizar dos tipos de cálculos: </p>
          <ol>
            <li>Cuántas veces aparece determinado codon o par de codones en la secuencia de la especie de referencia
            </li>
            <li>Cuántas veces ese codon o par codónico fue conservado a través de las especies vinculadas (definiendo la
              conservación como </li>
          </ol>
          <p>Tomando como especie de referencia aquella localizada en la primera línea del archivo MSA.</p>
        </div>
        <div class="col2">
          <p>El algoritmo, además, calcula las tasas de conservación en ORF+1 y ORF+2, en caso de que desee verificar si
            la tasa de conservación se debe a la posición del codón o par codónico y no a la secuencia de los mismos.
          </p>
          <p>Si desea conocer en más detalle el funcionamiento del algoritmo, o realizar contribuciones al mismo, puede
            visitar <a href="http://github.com/fx-biocoder/Conservacion-de-codones-raros">el repositorio en Github.</a>
            en el cual se encuentran alojados los componentes del mismo</p>
        </div>
      </article>

    </section>
  </div>
</template>

<script>
export default {
  name: 'app_section_2'
}
</script>

<<<<<<< Updated upstream

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}


=======

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
>>>>>>> Stashed changes
.descripcion {
  display: flex;
  flex-direction: row;
  margin: 2%;
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
.titulo {
  text-align: center;
  margin: 2%;
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
.col1, .col2 {
  
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 2%;
  line-height: 1.6;
  flex: 0 1 auto;
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
}
</style>
<template>
  <div class="container page">
    <section id="section-2">
      <div class="titulo">
        <h2>How does the app work?</h2>
      </div>

      <article class="descripcion">
        <div class="col1">
          <p>This app calculates the conservation rates of codons and codon pairs through linked species (like those from a common gender). For that purpose, the algorithm uses one or multiple MSA files
            which contain aligned sequences of homologous genes and proceeds to perform the following calculations:
          </p>
          <ol>
            <li>How often does a determined codon or codon pair appear in the reference species sequence</li>
            <li>How often has a codon or codon pair been conserved through linked species.</li>
          </ol>
          <p>By taking as a reference species that which is located in the first line of the MSA file</p>
        </div>
        <div class="col2">
          <p>The algorithm also calculates the conservation rates in ORF+1 and ORF+2, in case you want to verify whether the conservation rate is due to the position of the codon or codon pair in the genome or the sequence itself.</p>
          <p>Are you interested in knowing how the app works in more detail? Perhaps you want to make contributions to our work? Please check <a href="http://github.com/fx-biocoder/Conservacion-de-codones-raros">this Github repo</a>
            in which you will find the files used for the analysis.</p>
        </div>

        <div class="imagen">

        </div>
       
        
      </article>

    </section>
  </div>
</template>

<script>
/*
const api = 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ'
const target = document.getElementsByClassName('imagen');
function fetchImage() {
  fetch(api)
  .then(response => response.json())
  .then(data => {target.innerHTML = `<img src="${data.file}"/>`;
    })
}

fetchImage()
*/
export default {
  name: 'app_section_2',
  data() {
    return {
      
    }
  },
  /*
  mounted() {
    
  let vue = this;
  const imgUrl = 'https://picsum.photos/200/300'
  axios 
      .get(imgUrl)
      .then(function(response) {
        /*const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('img');
        link.src = url;
        
       vue.imagenes = response.data;
        }
        )
  }
  */
}

</script>


<style scoped>
.container {
  height: 90vh;
  margin-top: 7vh;
}
#section-2 {
  background-color: white;
  margin: 2%;
  padding: 5%;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(201 200 200);
  background-image: none;
  /*height: 80vh;*/
  color: black;
  position: relative;
}
.descripcion {
  display: flex;
  flex-direction: row;
  margin: 2%;
  flex-wrap: nowrap;
  color: black;
}
.titulo {
  text-align: center;
  margin: 2%;
  padding: 1%;
  flex-grow: 4;
}
.col1,
.col2 {
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 2%;
  line-height: 1.6;
  flex: 0 1 auto;
} 

.col2 a {
  color: blue;
  font-size: medium;
}
</style>
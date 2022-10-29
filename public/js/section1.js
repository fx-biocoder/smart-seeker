// Constants and variables
const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector("#input-file");
let files;

// 'Click' event
button.addEventListener("click", () => { // Parámetro "e" borrado
    try {                                // Bloque "try"
        input.click();
    }
    catch(error) {                       // Catch
        console.log(error);
    }
    
});

// 'Change' event
input.addEventListener("change", () => {        // Parámetro "e" borrado
    try {                                       // Bloque "try"
        files = input.files;
        dropArea.classList.add("active");
        showFiles(files);
        dropArea.classList.remove("active");
    }
    catch(error) {                              // Catch
        console.log(error);
    }
});

// 'Dragover' event
dropArea.addEventListener("dragover", (event) => {  // Cambié "e" por "event"
    try {                                           // Bloque "try"
        event.preventDefault();
        dropArea.classList.add("active");
        dragText.textContent = "Suelta para subir los archivos";
    }
    catch (error) {                                 // Catch
        console.log(error);
    }
});

// 'Dragleave' event
dropArea.addEventListener("dragleave", (event) => { // Cambié "e" por "event"
    try {
        event.preventDefault();
        dropArea.classList.remove("active");
        dragText.textContent = "Arrastra y suelta los archivos";
    }
    catch(error) {
        console.log(error);
    }
});

// 'Drop' event
dropArea.addEventListener("drop" , (event) => { // Cambié "e" por "event"
    try {                                       // Bloque "try"
        event.preventDefault();
        files = event.dataTransfer.files;
        showFiles(files);
        dropArea.classList.add("active");
        dragText.textContent = "Drop your files here";
    }
    catch (error) {
        console.log(error);
    }
});


function showFiles(files) {
    if (files.length == undefined) {        // Error arreglado, asignación cambiada a booleano
        processFile(files);
    } else {
        for(const file of files){
            processFile(file);
        }
    }
}

function processFile(file){
    const docType = file.type;
    const validExtensions = ["image/png"];

    if(validExtensions.includes(docType)){
        //archivo válido
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', () => {
            const fileUrl = fileReader.result;
            const image = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" width="50">
                    <div class="status">
                        <span>${file.name}</span>
                        <span class="status-text">
                                Loading...
                            </span>
                    </div>
                </div>
            `;

            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
    });

    fileReader.readAsDataURL(file);
    uploadFile(file, id);
    } else{
        //no es un archivo válido
        alert('No es un archivo válido');

    
    }
}

async function uploadFile(file, id){
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch('http://localhost:3000/upload',{
            method: "POST",
            body: formData,
        });

        /* eslint-disable no-unused-vars */
        const responseText = await response.text();
        /* eslint-enable no-unused-vars */

        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">Archivo subido correctamente..</span>`
    } catch (error) {
        document.querySelector(`#${id} .status-text`).innerHTML = `<span class="success">El archivo no pudo subirse..</span>`
    }

}

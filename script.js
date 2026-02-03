let input= document.getElementById("inputAgregarTarea");
let boton= document.getElementById("botonAgregarTarea");
let listaTareas=document.getElementById("listaTareas");

input.focus();
function agregarTarea(){
    let valorDelInput= input.value
    if(valorDelInput==""){
        alert("Debes agregar una tarea")
    }else{
        let elemento= document.createElement("li");
        elemento.textContent= valorDelInput;
        listaTareas.appendChild(elemento);
        elemento.classList.add("tarea");
        
        let eliminar=document.createElement("button");
        eliminar.textContent="X";
        elemento.appendChild(eliminar);
        eliminar.classList.add("eliminar");
        input.focus();    
    }
}

boton.addEventListener("click",agregarTarea);
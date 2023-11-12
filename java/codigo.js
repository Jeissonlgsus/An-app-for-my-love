//-------------------declaracion de constantes-------------------------------
const sectionAdvertencia = document.getElementById('advertencia')
const personalidadAlan = document.getElementById('personalidadAlan')
const personalidadSikki = document.getElementById('personalidadSikki')
const personalidadEric = document.getElementById('personalidadEric')
const sectionReiniciar = document.getElementById('sectionReiniciar')
const botonPersonaje = document.getElementById('botonPersonaje')
const botonAdvertencia = document.getElementById('botonAdvertencia')
const botonReiniciar = document.getElementById('reiniciar')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let sectionSeleccionarPersonaje = document.getElementById('seleccionarPersonaje')

let personajes = []
let opcionPersonaje
let inputAlan
let inputSikki
let inputEric
//-----------------Apertura de pagina---------------------------------------
let nombre = ""
nombre = prompt("What is your name?")
while(nombre != "Luna"){
    alert("Sorry, your name is wrong. Insert a valid name")
    nombre = prompt("what is your name?")
}
alert("Welcome my love ❤ ")
//--------------------------------Inicio--------------------------------------------
//------------------------------Generacion de clases--------------------------------
class Personaje{
    constructor(nombre,foto){
        this.nombre = nombre
        this.foto = foto
    }
}

let alan = new Personaje('Alan','./imagenes/alan.png')
let sikki = new Personaje('Sikki','./imagenes/sikki.png')
let eric = new Personaje('Eric','./imagenes/eric.png')

personajes.push(alan,sikki,eric)

function iniciarApp(){
    sectionAdvertencia.style.display='none'
    sectionReiniciar.style.display = 'none'
    personalidadAlan.style.display='none'
    personalidadSikki.style.display='none'
    personalidadEric.style.display='none'

    personajes.forEach((personaje) =>{
        opcionPersonaje = `
        <input type="radio" name="personaje" id="${personaje.nombre}"/>
        <label class="tarjetaPersonaje" for="${personaje.nombre}">
            <p>${personaje.nombre}</p>
            <img src="${personaje.foto}" alt="${personaje.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionPersonaje
        inputAlan = document.getElementById('Alan')
        inputSikki = document.getElementById('Sikki')
        inputEric = document.getElementById('Eric')
    })

    botonPersonaje.addEventListener('click',selecionarPersonaje)
    botonAdvertencia.addEventListener('click', personalidad)
    botonReiniciar.addEventListener('click', reiniciarApp)
}

function selecionarPersonaje(){
    if (inputAlan.checked == false && inputEric.checked == false && inputSikki.checked == false){
        alert("Select a guide")
    }else {
        let sectionSeleccionarPersonaje = document.getElementById('seleccionarPersonaje')
        sectionSeleccionarPersonaje.style.display = 'none'

        let sectionAdvertencia = document.getElementById('advertencia')
        sectionAdvertencia.style.display='flex'
    }    
}
function personalidad(){
    sectionAdvertencia.style.display='none'
    if(inputAlan.checked){
        personalidadAlan.style.display='flex'
        sectionReiniciar.style.display = 'flex'
    } else if (inputSikki.checked){
        personalidadSikki.style.display='flex'
        sectionReiniciar.style.display = 'flex'
    }else if(inputEric.checked){
        personalidadEric.style.display='flex'
        sectionReiniciar.style.display = 'flex'
    }

}

function reiniciarApp(){
    sectionSeleccionarPersonaje.style.display = 'flex'
    sectionAdvertencia.style.display='none'
    personalidadAlan.style.display='none'
    personalidadSikki.style.display='none'
    personalidadEric.style.display='none'
    sectionReiniciar.style.display = 'none'
}

window.addEventListener('load',iniciarApp)
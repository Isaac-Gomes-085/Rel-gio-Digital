//import {format} from 'date-fns'
//import {utcToZonedTime} from 'date-fns-tz'

//const data = {

//}

const hora = document.getElementById('hora')
const min = document.getElementById('minuto')
const seg = document.getElementById('segundo')

const box = setInterval( () =>  {
    let agora = new Date()
    let hora_atual = agora.getHours()
    if(hora_atual < 10) {hora_atual = `0${hora_atual}`}
    hora.innerHTML = hora_atual
    
    let mins_atual = agora.getMinutes()
    if(mins_atual < 10) {mins_atual = `0${mins_atual}`}
    min.innerHTML = mins_atual

    let seg_atual = agora.getSeconds()
    if(seg_atual < 10) {seg_atual = `0${seg_atual}`} seg.innerHTML = seg_atual
    const lugar = document.getElementById('regiao')
})
 

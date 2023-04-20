function eleccion(jugada){
        let resultado =""
        if(jugada == 1){
    resultado = "piedra (⚫)"
        }
        else if(jugada == 2){
        resultado =  "papel (🧾)"
        }
        else if(jugada == 3){
        resultado = "Elegiste espadas crusadas (⚔️)"
        } else {
        resultado = "MAL ELEGIDO (💀)"
        }
    return resultado
    }

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0

while(victorias < 3 && derrotas < 3){
        let min = 1 
        let max = 3 
        let pc = Math.floor(Math.random() * (max - min + 1) + min)
        jugador = prompt ("elige:1 para piedra, 2 para papel, 3 para espadas crusadas")
        //alert ("elegiste" + jugador)
        alert("pc elige: " + eleccion(pc))
        alert("tu eliges " + eleccion(jugador))
        //COMBATE
        if(pc == jugador){
            alert("EMPATE")
        } else if(jugador == 1 && pc == 3 ){
            alert("GANASTE")
            victorias = victorias + 1
        } else if(jugador == 2 && pc == 1 ){
            alert("GANASTE")
            victorias = victorias + 1
        } else if(jugador == 3 && pc == 2 ){
            alert("GANASTE")
            victorias = victorias + 1
        } else {
            alert("perdiste")
            derrotas = derrotas + 1
        }   
    }            

alert("Ganaste " + victorias + " veces. perdiste " + derrotas + " veces.")

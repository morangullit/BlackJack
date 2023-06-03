import { pedirCarta } from "./pedir-deck";
import { valorCarta } from "./valor-deck";

/**
 * 
 * @param {Number} puntosMinimos  puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora para mostrar las cartas
 * @param {Array <String>} deck  
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesario')
    if( !deck ) throw new Error('El deck es necesario')
    if( !puntosHTML ) throw new Error('El argumento puntosHTML es necesario')

    let puntosComputadora = 0;
    
    let ganadasComputadora = 0;
    const contadorGanadasComputadora = document.querySelector('#computadora-ganadas span');

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
            ganadasComputadora++;
            contadorGanadasComputadora.innerText = ganadasComputadora;
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
            ganadasComputadora++;
            contadorGanadasComputadora.innerText = ganadasComputadora;
        }
    }, 100);
}
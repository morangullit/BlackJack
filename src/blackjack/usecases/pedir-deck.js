
/**
 * @param {Array<String>} es un arreglo de string carta
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
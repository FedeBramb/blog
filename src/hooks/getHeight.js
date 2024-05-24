export function calculatePercentageHeight(element) {
    const containerHeight = element.clientHeight; // Altezza dell'elemento container
    const viewHeight = window.innerHeight; // Altezza della view
  
    const percentageHeight = ( viewHeight  / containerHeight ) * 100; // Calcolo della percentuale
  
    return percentageHeight;
}
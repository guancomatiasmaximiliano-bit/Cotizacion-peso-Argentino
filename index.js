const prompt = require ("prompt-sync")();
const fecha = prompt("Ingresa fecha (YYYY-MM-DD): ");

const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json';

fetch (url)
.then(res => res.json())
.then(data => {
    console.log('Cotizacion del peso Argentino (ARS) el ${fecha}:' , data.eur.ars);
})
.catch(() => console.log("Error al obtener datos o fecha invalida"));

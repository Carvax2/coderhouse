
let nombre = "Pepe";

const edad = 25;

let precio = 99.90;

let moneda = "$";

let favSeries = ["Dark", "Mr. Robot", "Stranger Things"];

class movie {

    constructor (nombre, estreno, protagonistas) {
        this.nombre = nombre;
        this.estreno = estreno;
        this.protagonistas = protagonistas;
    }

}

const movie1 = new movie ("TopGun", "2022", ["Tom Cruise", "Val Kilmer"]);
const movie2 = new movie ("Titanic", "1998", ["Leonardo Dicaprio", "Kate Winslet"])

let favMovies = {movie1, movie2};

let costo = moneda + precio;
let sumaEdad = edad+1;

console.log (nombre);
console.log (edad);
console.log (sumaEdad);
console.log (costo);
console.log (favSeries);
console.log (favMovies.movie2.nombre);
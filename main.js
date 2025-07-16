// declaro la clase personaje, la cual sera la clase base de todos los personajes del juego.
// con las propiedades nombre, vida, danio, defensa y velocidad.

class Personaje {
  constructor(nombre, vida, danio, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.danio = danio;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }


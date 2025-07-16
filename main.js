// declaro la clase personaje, la cual sera la clase base de todos los personajes del juego, con las propiedades nombre, vida, danio, defensa y velocidad.

class Personaje {
  constructor(nombre, vida, danio, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.danio = danio;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

// implemento los metodos  atacar y saludar en la clase personaje, los cuales son comunes a todos los personajes del juego, el metodo atacar recibe un objetivo, se generan  numeros aleatrios para el ataque y la defensa, y se calcula el daño hecho al objetivo. El metodo saludar imprime un mensaje de saludo con el nombre y la vida del personaje.

  atacar(objetivo){
    let ataque = Math.floor(Math.random() * (this.danio + 1)) ;
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
  console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y mi clase es ${this.constructor.name}. Estoy listo para empezar el juego`);
    }
  











  // declaro la clase Guerrero, que hereda de la clase Personaje, pero tiene la propiedad extra de de array_de_armas y el metodo atacar_con_arma.

  class Guerrero extends Personaje {
    constructor(nombre, vida, danio, defensa, velocidad, array_de_armas) {
      super(nombre, vida, danio, defensa, velocidad);
      this.array_de_armas = array_de_armas || []; //
    }

    atacar_con_arma() {
      console.log(`${this.nombre} ataca con su arma: ${this.array_de_armas.join(', ')}`);
    }
  }


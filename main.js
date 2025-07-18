// declaro la clase personaje, la cual sera la clase base de todos los personajes del juego, con las propiedades nombre, vida, danio, defensa y velocidad.

class Personaje {
  constructor(nombre, vida, danio, defensa, velocidad) {
    this.nombre = nombre;
    this.vida = vida;
    this.danio = danio;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

// implemento los metodos  atacar y saludar en la clase personaje, los cuales son comunes a todos los personajes del juego, el metodo atacar recibe un objetivo, se generan  numeros aleatrios para el ataque y la defensa, y se calcula el daño hecho al objetivo, pero hay posibilidades de que el ataque sea igual a 0, pero eso en cualquier combate es imposible( ya que pienso que si un personaje ataca a otro aunque sea un poco de danio debe causar por eso estableci danio minimo, El metodo saludar imprime un mensaje de saludo con el nombre y sus propiedades.

atacar(objetivo) {
  let minAtaque = Math.floor(this.danio * 0.3);
  let maxAtaque = this.danio;
  let ataque = Math.floor(Math.random() * (maxAtaque - minAtaque + 1)) + minAtaque;
  let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
  let danio = ataque - defensa;
  if (danio < 0) {
    danio = 0;
  }
  if (ataque <= minAtaque + 1) {
    console.log(`${this.nombre} lanza un ataque muy débil contra ${objetivo.nombre}... ¡Apenas lo roza!`);
  } else if (danio === 0) {
    console.log(`${this.nombre} ataca a ${objetivo.nombre}, pero su defensa lo bloquea por completo.`);
  } else {
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño.`);
  }
  return danio;
}
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo  ${this.vida} de vida, tengo un danio de ${this.danio}, mi defensa es de ${this.defensa} mi velocidad es ${this.velocidad} y Estoy listo para empezar el juego`);
    }
  }

  // declaro la clase Guerrero, que hereda de la clase Personaje, pero tiene la propiedad extra de de array_de_armas y el metodo atacar_con_arma.

  class Guerrero extends Personaje {
  constructor(nombre, vida, danio, defensa, velocidad, array_de_armas) {
    super(nombre, vida, danio, defensa, velocidad); // Hereda del personaje base
    this.array_de_armas = array_de_armas || ["Espada", "Hacha", "Lanza"]; // Por defecto si no se pasan armas
  }

  // Método para atacar con un arma aleatoria
  atacar_con_arma(objetivo) {
    // Selecciona arma aleatoria
    let armaIndex = Math.floor(Math.random() * this.array_de_armas.length);
    let armaSeleccionada = this.array_de_armas[armaIndex];

    // Daño aleatorio basado en el daño base del Guerrero
    let minAtaque = Math.floor(this.danio * 0.3);
    let maxAtaque = this.danio;
    let ataque = Math.floor(Math.random() * (maxAtaque - minAtaque + 1)) + minAtaque;

    // Defensa del objetivo
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if (danio < 0) danio = 0;

    console.log(`${this.nombre} ataca con ${armaSeleccionada} a ${objetivo.nombre} causando ${danio} de daño.`);

    return danio;
  }
}

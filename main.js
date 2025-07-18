// Partiendo del principio de lo visto en la ultima asesoria, se declara una funcion para calcular el ataque y el danio se entiende como la funcion de ataque menos la defensa del objetivo o defensor.

function CalcularResultadoCombate(atacante, defensor, tipo) { // la funtion recibe 3 parametros.
  let ataque = Math.floor(Math.random() * atacante.daño) + 1;// el Math.random() genera un numero aleatorio entre 0 y 1, al multiplicarlo por el daño del atacante y sumarle 1, se obtiene un valor entre 1 y el daño del atacante. el Math.floor() redondea hacia abajo el resultado, asegurando que el ataque sea un numero entero positivo.
  let defensa = Math.floor(Math.random() * defensor.defensa) + 1; // lo mismo para la defensa del defensor.
// Se imprime un mensaje que indica el intento de ataque y la cantidad de daño y defensa involucrados.
  console.log(`${atacante.nombre} intenta ${tipo} a ${defensor.nombre} con ${ataque} daño vs ${defensa} defensa`);
  if (defensa > ataque) {// Si la defensa  es mayor que el ataque, se considera que el ataque falla.
    console.log(` El ataque falló: ${defensor.nombre} se defendió exitosamente.`); // Se imprime un mensaje indicando que el ataque falló.
    return false;
  } else {
    defensor.vida -= ataque; // Si el ataque es exitoso, se resta el daño del atacante a la vida del defensor.
    if (defensor.vida < 0) defensor.vida = 0;// Nos aseguramos de que la vida del defensor no sea negativa.
    console.log(`✅ Ataque exitoso: ${defensor.nombre} recibe ${ataque} daño. Vida restante: ${defensor.vida}`);
    if (defensor.vida === 0) {// Si la vida del defensor llega a 0, se considera que ha muerto.
      console.log(`💀 ${defensor.nombre} ha muerto y no puede seguir luchando.`); // Se imprime un mensaje indicando que el defensor ha muerto.
    }
    return true;
  }
}

class Personaje {// declaramos la clase Personaje, la cual es la clase base de los demas personajes del juego.
  // por instrucciones del enunciado el constructor recibe las propiedades : nombre, clase, vida, daño, defensa y velocidad.
  constructor(nombre, clase, vida, daño, defensa, velocidad) {
    this.nombre = nombre;
    this.clase = clase;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }
//se implementa el metodo saludar, que imprime un mensaje de saludo con el nombre y la clase del personaje.
  saludar() {
    console.log(`👋 Hola, soy ${this.nombre}, un ${this.clase}. ¡Estoy listo para el combate!`);
  }
// se implementa el metodo atacar, que recibe un objetivo(defensor) y llama a la funcion CalcularResultadoCombate para calcular el resultado del ataque.
  atacar(defensor) { // el metodo atacar recibe como parametro un objetivo y lo llamamos defensor
    CalcularResultadoCombate(this, defensor, "golpear con los puños");
  }
}
// Se declaran las clases Guerrero, Mago y Arquero que heredan de la clase Personaje.
class Guerrero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, array_de_armas) {// el constructor recibe las propiedades del personaje y por instrucciones del enunciado un array de armas.
    super(nombre, "Guerrero", vida, daño, defensa, velocidad);
    this.array_de_armas = array_de_armas || [];// se inicializa el array de armas o se deja vacio si no se pasan armas, para evitar errores si no se pasan armas al crear un guerrero.

  }

  atacar_con_arma(defensor) { // el metodo atacar_con_arma recibe un obejetivo que llamamos defensor.
    let arma = this.array_de_armas[Math.floor(Math.random() * this.array_de_armas.length)];// para seleccionar un arma aleatoria del array_de_armas, se utiliza el metodo Math.random() para generar un numero aleatorio entre el 0 y el largo del array lo cual se hace con el metodo .length y luego se redondea hacia abajo con Math.floor() para obtener un indice valido del array.
    console.log(`🗡️ ${this.nombre} ataca con ${arma}`); // se imprime el mensaje que el guerrero se ataca con el arma seleccionada aleatoriamente.
    CalcularResultadoCombate(this, defensor, `atacar con ${arma}`);// se llama a la funcion CalcularResultadoCombate para calcular el resultado del ataque, pasando el guerrero como atacante, el defensor como objetivo y el tipo de ataque como atacar con el arma seleccionada aleatoriamente.
  }
}
// Se declaran las clases Mago y Arquero que heredan de la clase Personaje.
class Mago extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, array_de_hechizos) {// el constructor recibe las propiedades del personaje y por instrucciones del enunciado un array de hechizos.
    super(nombre, "Mago", vida, daño, defensa, velocidad);// se llama al constructor de la clase base Personaje con las propiedades del mago.
    this.array_de_hechizos = array_de_hechizos || []; // se inicializa el array de hechizos o se deja vacio si no se pasan hechizos, para evitar errores si no se pasan hechizos al crear un mago.
  }

  atacar_con_hechizo(defensor) { // declaramos el metodo atacar_con_hechizo que recibe un objetivo que llamamos defensor.
    let hechizo = this.array_de_hechizos[Math.floor(Math.random() * this.array_de_hechizos.length)]; // para seleccionar un hechizo aleatorio del array_de_hechizos, se utiliza el metodo Math.random() para generar un numero aleatorio entre el 0 y el largo del array lo cual se hace con el metodo .length y luego se redondea hacia abajo con Math.floor() para obtener un indice valido del array.
    console.log(`🔮 ${this.nombre} lanza ${hechizo}`); // se imprime el mensaje que el mago lanza el hechizo seleccionado aleatoriamente.
    CalcularResultadoCombate(this, defensor, `lanzar ${hechizo}`); // se llama a la funcion CalcularResultadoCombate para calcular el resultado del ataque, pasando el mago como atacante, el defensor como objetivo y el tipo de ataque como lanzar el hechizo seleccionado aleatoriamente.
  }
}
// Se declaran las clases Arquero que heredan de la clase Personaje.
class Arquero extends Personaje {
  constructor(nombre, vida, daño, defensa, velocidad, array_de_flechas) { // el constructor recibe las propiedades del personaje y por instrucciones del enunciado un array de flechas.
    super(nombre, "Arquero", vida, daño, defensa, velocidad);
    this.array_de_flechas = array_de_flechas || []; // se inicializa el array de flechas o se deja vacio si no se pasan flechas, para evitar errores si no se pasan flechas al crear un arquero.
  }

  disparar(defensor) { // declaramos el metodo disparar que recibe un objetivo que llamamos defensor.
    let flecha = this.array_de_flechas[Math.floor(Math.random() * this.array_de_flechas.length)]; // para seleccionar una flecha aleatoria del array_de_flechas, se utiliza el metodo Math.random() para generar un numero aleatorio entre el 0 y el largo del array lo cual se hace con el metodo .length y luego se redondea hacia abajo con Math.floor() para obtener un indice valido del array.
    console.log(`🏹 ${this.nombre} dispara una ${flecha}`);// se imprime el mensaje que el arquero dispara la flecha seleccionada aleatoriamente.
    CalcularResultadoCombate(this, defensor, `disparar ${flecha}`); // se llama a la funcion CalcularResultadoCombate para calcular el resultado del ataque, pasando el arquero como atacante, el defensor como objetivo y el tipo de ataque como disparar la flecha seleccionada aleatoriamente.
  }
}
// Se crea un array de cinco Personajes con las clases con las clases heredadas segun el enunciado, cada uno con sus propiedades y un array de armas, hechizos o flechas.
let personajes = [
  new Guerrero("Espartaco", 100, 25, 10, 8, ["Espada", "Hacha"]),
  new Guerrero("Leonidas", 90, 30, 12, 6, ["Lanza", "Martillo"]),
  new Mago("Harry Potter", 120, 35, 9, 9, ["Bola de Fuego", "Relámpago"]),
  new Mago("Voldemort", 85, 28, 9, 9, ["Tormenta", "Explosión Arcana"]),
  new Arquero("Hawkeye", 75, 20, 8, 10, ["Flecha Veloz", "Flecha de Hielo"])
];

// se declara la variable ronda para llevar el conteo de las mismas en el combate.
let ronda = 1;
// se crea la funcion jugarRonda que se encargara de ejecutar una ronda del combate, en la cual cada personaje atacara a un objetivo aleatorio distinto, y se tendra en cuenta la velocidad de cada personaje para determinar el orden de ataque, segun el enunciado.
function jugarRonda() {
  console.log(`\n⚔️ Ronda ${ronda}`);// se imprime el mensaje de incio de ronda con un salto de linea, para separar visualmente las rondas.

  // se declara la variable orden que contendra los personajes ordenados.
  let orden = personajes
    .filter(p => p.vida > 0)// con el metodo .filter() se filtran los personajes que tienen vida mayor a 0, es decir, que estan vivos, siendo p cada personaje del array personajes, y accediendo a su propia vida.
    .map(p => ({ personaje: p, iniciativa: Math.floor(Math.random() * p.velocidad) + 1 }))// se usa el metodo .map() para crear un nuevo array de objetos que contengan el personaje y su iniciativa, que se calcula como un numero aleatorio entre 1 y la velocidad del personaje, usando Math.random() para generar un numero aleatorio entre 0 y 1, multiplicandolo por la velocidad del personaje y sumando 1, luego se redondea hacia abajo con Math.floor().
    .sort((a, b) => b.iniciativa - a.iniciativa);//se usa el metodo .sort() para ordenar los personajes por iniciativa de mayor a menor, restando la iniciativa de b a la de a, para que los personajes con mayor iniciativa ataquen primero.

  for (let { personaje } of orden) { // se itera sobre el array orden, desestructurando cada objeto para obtener el personaje.
        if (personaje.vida <= 0) continue;// Si el personaje no tiene vida, se salta su turno.

    // Selección aleatoria de objetivo vivo distinto
    let posiblesObjetivos = personajes.filter(p => p !== personaje && p.vida > 0);// con el metodo .filter() se filtran los personajes que son distintos al personaje que esta atacando y que tienen vida mayor a 0, es decir, que estan vivos, siendo p cada personaje del array personajes.
    if (posiblesObjetivos.length === 0) continue;// si no hay objetivos vivos, se salta el turno del personaje.
    let objetivo = posiblesObjetivos[Math.floor(Math.random() * posiblesObjetivos.length)];// se selecciona un objetivo aleatorio del array posiblesObjetivos, usando Math.random() para generar un numero aleatorio entre 0 y el largo del array, lo cual se hace con el metodo .length y luego se redondea hacia abajo con Math.floor() para obtener un indice valido del array.

    // Elegir modo de ataque
    let ataqueConHabilidad = Math.random() < 2 / 3;// declaramos una variable ataqueCon Habilidad que sera true si el numero aleatorio generado es menor a 2/3, lo que significa que hay un 66% de probabilidad de que el personaje ataque con una habilidad especial y un 33% de probabilidad de que ataque normalmente de acuerdo al enunciado.
    if (!ataqueConHabilidad) { // Si ataqueConHabilidad es false, el personaje ataca normalmente.
      personaje.atacar(objetivo);// se llama al metodo atacar del personaje, pasando el objetivo como parametro.
    } else {
      if (personaje instanceof Guerrero) personaje.atacar_con_arma(objetivo);// Si el personaje es un Guerrero, se llama al metodo atacar_con_arma, pasando el objetivo como parametro.
      else if (personaje instanceof Mago) personaje.atacar_con_hechizo(objetivo);// Si el personaje es un Mago, se llama al metodo atacar_con_hechizo, pasando el objetivo como parametro.
      else if (personaje instanceof Arquero) personaje.disparar(objetivo);// Si el personaje es un Arquero, se llama al metodo disparar, pasando el objetivo como parametro.
      else personaje.atacar(objetivo);// Si el personaje no es ninguno de los anteriores, se llama al metodo atacar, pasando el objetivo como parametro.
    }
  }

  ronda++;// Incrementar el contador de rondas
}
// Saludo inicial
personajes.forEach(p => p.saludar());// Se itera sobre el array personajes y se llama al metodo saludar de cada personaje, para que cada uno se presente antes de iniciar el combate, siendo p cada personaje del array personajes.

// Ejecutar rondas hasta que quede solo uno
while (personajes.filter(p => p.vida > 0).length > 1) {// se llama a un ciclo while que se ejecuta mientras haya mas de un personaje con vida, usando el metodo .filter() para filtrar los personajes que tienen vida mayor a 0, y luego se verifica la longitud del array resultante.
  jugarRonda();// se llama a la funcion jugarRonda para ejecutar una ronda del combate.
}

let ganador = personajes.find(p => p.vida > 0);// Se busca el personaje que tenga vida mayor a 0, es decir, el ganador del combate, usando el metodo .find() para encontrar el primer personaje que cumpla con la condicion de tener vida mayor a 0.
console.log(`\n🏆 ¡${ganador.nombre} el ${ganador.clase} ha ganado la batalla!`);// se imprime el nombre y la clase del ganador.
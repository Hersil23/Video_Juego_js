
//Creo la clase Personaje
class Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  saludar(clase){
    return `Hola soy ${this.nombre}, un ${clase}`;
  }

  //El metodo para atacar recibe un objetivo
  atacar(objetivo){
    //Genero un numero aleatorio entre 0 y el ataque del personaje
    let ataque = Math.floor(Math.random() * (this.ataque + 1)) ;
    //Genero un numero aleatorio entre 0 y la defensa del objetivo
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    //Calculo el daño
    let danio = ataque - defensa;
    //Si el daño es menor a 0, lo cambio a 0
    if(danio < 0){
      danio = 0;
    }
    //Imprimo el daño que se hizo
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${danio} de daño`);
    //Retorno el daño hecho
    return danio;
  }
}

class Mago extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, hechizos){
    super(nombre, vida, ataque, defensa, velocidad);
    this.hechizos = hechizos;
  }

  lanzarHechizo(objetivo){
    //Seleccionar un hechizo aleatorio
    let hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
    let ataque = Math.floor((Math.random() * (hechizo.danio + 1)) );
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} lanza un hechizo de ${hechizo.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Guerrero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, armas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.armas = armas;
  }

  atacarConArma(objetivo){
    let arma = this.armas[Math.floor(Math.random() * this.armas.length)];
    let ataque = Math.floor(Math.random() * (arma.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} ataca con ${arma.nombre} a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

class Arquero extends Personaje {
  constructor(nombre, vida, ataque, defensa, velocidad, flechas){
    super(nombre, vida, ataque, defensa, velocidad);
    this.flechas = flechas;
  }

  dispararFlecha(objetivo){
    let flecha = this.flechas[Math.floor(Math.random() * this.flechas.length)];
    let ataque = Math.floor(Math.random() * (flecha.danio + 1));
    let defensa = Math.floor(Math.random() * (objetivo.defensa + 1));
    let danio = ataque - defensa;
    if(danio < 0){
      danio = 0;
    }
    console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre} y le hace ${danio} de daño`);
    return danio;
  }
}

let mago1 = new Mago("Gandalf", 100, 50, 20, 10, [
  {nombre: "Fuego", danio: 120},
  {nombre: "Hielo", danio: 150}
]);

let mago2 = new Mago("Merlin", 100, 50, 20, 10, [
  {nombre: "Rayo", danio: 180},
  {nombre: "Viento", danio: 100}
]);

let guerrero1 = new Guerrero("Aragorn", 150, 70, 30, 5, [
  {nombre: "Espada", danio: 100},
  {nombre: "Hacha", danio: 110}
]);

let guerrero2 = new Guerrero("Conan", 150, 70, 30, 5, [
  {nombre: "Maza", danio: 120},
  {nombre: "Lanza", danio: 105}
]);

let arquero1 = new Arquero("Legolas", 120, 60, 20, 15, [
  {nombre: "Flecha de fuego", danio: 110},
  {nombre: "Flecha de hielo", danio: 120}
]);

let personajes = [mago1, mago2, guerrero1, guerrero2, arquero1];
let personajes_vivos = personajes;
let ronda = 1;
while( personajes_vivos.length > 1 ){
  console.log(`Ronda ${ronda}`);
  //Creo un arreglo de objetos con la velocidad de cada personaje
  let turno = [];
  // Lleno el arreglo turno con los personajes vivos y su velocidad
  for(let personaje of personajes_vivos){
    turno.push(
      {
        personaje: personaje,
        velocidad: Math.floor(Math.random() * (personaje.velocidad + 1))
      }
    );
  }
  //Organizar de mayor a menor velocidad
  turno.sort((a, b) => b.velocidad - a.velocidad);

  //Comienza la ronda de ataques
  for(let i = 0; i < turno.length; i++){
    //Seleccionar al personaje que ataca
    let atacante = turno[i].personaje;

    //Seleccionar al objetivo aleatorio
    do{
      var objetivo = personajes_vivos[Math.floor(Math.random() * personajes_vivos.length)];
    } while(atacante === objetivo);

    //Creo variable para guardar el daño
    let danio = 0;
    //Verifico si el atacante es un mago
    if(atacante instanceof Mago){
      //Creo una probabilidad de 50% para lanzar hechizo o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.lanzarHechizo(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Guerrero){
      // Creo una probabilidad de 50% para atacar con arma o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.atacarConArma(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    } else if(atacante instanceof Arquero){
      // Creo una probabilidad de 50% para disparar flecha o atacar
      let probabilidad = Math.floor(Math.random() * 2);
      if(probabilidad === 0){
        danio = atacante.dispararFlecha(objetivo);
      } else {
        danio = atacante.atacar(objetivo);
      }
    }
    //Restar la vida al objetivo
    objetivo.vida -= danio;
    console.log(`${objetivo.nombre} tiene ${objetivo.vida} de vida`);
    //objetivo.vida = objetivo.vida - danio;
    //Verificar si el objetivo murio
    if( objetivo.vida <= 0 ){
      console.log(`${objetivo.nombre} ha muerto`);
      //Eliminar al personaje del arreglo de personajes vivos
      personajes_vivos = personajes_vivos.filter(personaje => personaje !== objetivo);
    }

    //Verificar si solo queda un personaje vivo
    if(personajes_vivos.length === 1){
      console.log(`${personajes_vivos[0].nombre} ha ganado la batalla`);
      break;
    }
  }
  ronda++;
}
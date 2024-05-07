// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
          break;
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando um herói e realizando um ataque
  const meuHeroi = new Heroi('Aragorn', 35, 'guerreiro');
  meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada
  
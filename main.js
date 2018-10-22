// Exercício 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

// Exercício 2
const usuarios = [
    { nome: 'Fernando', idade: 27, empresa: 'P21 Sistemas' },
    { nome: 'Teyla', idade: 21, empresa: 'Autônomo' },
    { nome: 'Agatha', idade: 2, empresa: 'Estudante' },
];

// Exercício 2.1
const idades = usuarios.map(usuario => usuario.idade);

console.log(idades);

// Exercício 2.2
const maiorDezoito = usuarios.filter(usuario => usuario.idade >= 18 && usuario.empresa === 'Autônomo');

console.log(maiorDezoito);

// Exercício 2.3
const empresa = usuarios.find(usuario => usuario.empresa === 'Google');

console.log(empresa);

// Exercício 2.4
const calculo = usuarios.map(usuario => ({ ...usuario, idade: usuario.idade * 2})).filter(usuario => usuario.idade <= 50);

console.log(calculo);

// Exercício 3
const arr = [1, 2, 3, 4, 5];

// Exercício 3.1
arr.map(item => item +10);

// Exercício 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);

// Exercício 3.3
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => ({
    nome,
    idade
});

mostraUsuario(nome, idade);
mostraUsuario(nome);


// Exercício 3.4
const promise = () => new Promise((resolve, reject) => resolve());

// Exercício 4
const empresa = {
    nome: "P21 Sistemas",
    endereco: {
      cidade: "Brasília",
      estado: "DF"
    }
};
  
const {nome, endereco: { cidade, estado } } = empresa;
  
  console.log(nome);
  console.log(cidade);
  console.log(estado);

// Exercício 4.1
function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 });
   


   
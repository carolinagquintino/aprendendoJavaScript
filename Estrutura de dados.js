/* Array
Armazenar coleção de elementos do mesmo tipo (exceção PHP e JS) que pode ser identificado por um índice ou uma chave 
Índice inicia em 0
*/

//Vetor -> estruturas unidimensionais 
let diasDaSemana = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
];

//Matriz -> estruturas multidimensionais 
let usuarios = [
    ['Clark', 'Kent', 'Planeta Diário'],
    ['Gabriel', 'Fróes', 'Código Fonte'],
    ['Peter', 'Parker', 'Clarim Diário'],
    ['Vanessa', 'Weber', 'Código Fonte']
];

console.log(diasDaSemana[2]); // Quarta-feira

console.log(usuarios[1][2]) // Código Fonte

// ----------------------------------- / ------------------------------------ //

/* Pilha 
Coleção ordenada de itens baseada no princípio L.I.F.O. (Last In First Out), o último elemento a entrar na pilha é o último a sair 
*/

class Pilha {

    constructor() {
        this.elementos = [];
    }

    push(elemento) { // adicionar o elemento do topo da pilha 
        this.elementos.push(elemento);
    }

    pop() { // remover o elemento do topo da pilha 
        this.elementos.pop();
    }
}

const pilha = new Pilha();
pilha.push(1); // [1]
pilha.push(2); // [1, 2]
pilha.push(3); // [1, 2, 3]
pilha.push(4); // [1, 2, 3, 4]
pilha.push(5); // [1, 2, 3, 4, 5]

pilha.pop(); // [1, 2, 3, 4]
pilha.pop(); // [1, 2, 3]
pilha.pop(); // [1, 2]
pilha.pop(); // [1]
pilha.pop(); // []

// ----------------------------------- / ------------------------------------ //

/* Fila
Coleção ordenada de itens baseada no princípio F.I.F.O. (First In First Out), o primeiro a entrar é o primeiro a sair 
*/

class Fila {

    constructor() {
        this.elementos = [];
    }

    enqueue(elemento) { // adicionar o elemento no final da fila 
        this.elementos.push(elemento);
    }

    dequeue() { // remover o elemento no inicio da fila 
        this.elementos.shift();
    }
}

const filaDeAtendimento = new Fila();
fila.enqueue( 'Vanessa' );
fila.enqueue( 'Gabriel' );
fila.enqueue( 'Lucas' );

fila.dequeue(); // Vanessa foi atendida e removida da fila 
fila.dequeue(); // Gabriel foi atendido e removido da fila 
fila.dequeue(); // Lucas foi atendido e removido da fila 
// A fila foi zerada 

// ----------------------------------- / ------------------------------------ //

/* Árvore 
Coleção não ordenada de itens, modelo abstrato de uma estrutura hierárquica
Nós -> pais e filhos 
Primeiro nó = Raiz 
Nós internos -> que possuem pelo um filho 
Nós externos (folhas) -> não possuem nenhum filho 
Árvore binária -> insere os nós nem nenhuma regra definida 
Árvore binária de busca (BST - Binary Search Tree) -> insere a raiz e o primeiro nó filho, a partir do segundo nó é feita a verificação se o valor é maior que o valor da raiz, se sim, é adicionado a direita, se não, é adicionado a esquerda (subárvores da esquerda sempre menores que os da direita)
*/

// Árvora binária de busca

class Arvore {

    constructor() {
        this.nos = {}
    }

    inserir(arvore, valor) {

        if (arvore.valor) {

            if (valor > arvore.valor) {
                this.inserir(arvore.direita, valor)
            } else {
                this.inserir(arvore.esquerda, valor)
            }
        } else {
            arvore.valor = valor
            arvore.direita = {}
            arvore.esquerda = {}
        }
    }
}

const novaArvore = new Arvore();
novaArvore.inserir(novaArvore.nos, 23);
novaArvore.inserir(novaArvore.nos, 12);
novaArvore.inserir(novaArvore.nos, 4);
novaArvore.inserir(novaArvore.nos, 18);
novaArvore.inserir(novaArvore.nos, 1);
novaArvore.inserir(novaArvore.nos, 27);
novaArvore.inserir(novaArvore.nos, 25);

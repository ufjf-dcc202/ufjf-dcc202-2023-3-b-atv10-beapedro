let maria = 2;
let joao = 1;
export function deJoaoParaMaria() {
    maria += joao;
    joao = 0;
  }
  
  export function deMariaParaJoao() {
    joao += maria;
    maria = 0;
  }
  
  export function getMaria() {
    return maria;
  }
  
  export function getJoao() {
    return joao;
  }
  
  export function setMaria(valor) {
    maria = valor;
  }
  
  export function setJoao(valor) {
    joao = valor;
  }
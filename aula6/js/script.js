let click = 0;
let min = 0;
let max = 0;

function tabuada(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById('resultado');

    for(i = 1; i <= 10; i++){
        let resultado = i * numero;
        const node = document.createElement("p");
        const text = document.createTextNode(`${numero} x ${i} = ${resultado}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
    
}

function impressao(){
    let valor = document.getElementById('num').value;
    let elemento = document.getElementById('imprimir');
    elemento.innerHTML = "";

    let exibir = valor;
    for(i = 1; i <= valor; i++){
    const node = document.createElement("h1");
    const text = document.createTextNode("TEXTO H1");
    node.appendChild(text);
    elemento.appendChild(node);
    }
    
}



function contaClick(){
    click ++;
    document.getElementById('clicks').innerHTML = click;
}

function sortear(){
    let sortear = parseInt(Math.random()*100);
    document.getElementById('sorteio').innerHTML = `O valor sorteado é: ${sortear}`;

}


function sortear2(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let sortear = parseInt(Math.random() * (max - min) + min);
    document.getElementById('sorteio2').innerHTML = `O valor sorteado é ${sortear}`;


}
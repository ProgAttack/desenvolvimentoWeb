
let min = 0;
let max = 0;

function sortear(){
   
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let sortear = parseInt((Math.random() * (max - min) + min));
    document.getElementById('sorteio').innerHTML = `O valor sorteado é ${sortear}`;
}

let nota1 =  0.0;
let nota2 =  0.0;
let nota3 =  0.0;
let nota4 =  0.0;

function calcularMedia(){
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    let situacao = "";

    if(media < 2.0){
        situacao = "Reprovado";
    }else if(media >= 2.0 && media <= 5.9){
        situacao = "Recuperação";
    }else {
        situacao = "Aprovado"
    }

    let resultado = document.getElementById('resultado');
    
    if (situacao === "Aprovado") {
        resultado.style.backgroundColor = "green";
    } else if (situacao === "Recuperação") {
        resultado.style.backgroundColor = "blue";
    } else {
        resultado.style.backgroundColor = "red";
    }

    resultado.innerHTML = "NOME: " + nome + " MÉDIA: " + media.toFixed(2) + " SITUAÇÃO: " + situacao;
}
function enviar() {
    let elemento = document.getElementsByName('opt');
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = " ";
    for (let i = 0; i < elemento.length; i++) {
      if (elemento[i].checked) {
        document.getElementById('resultadoPesquisa').innerHTML = "ÁREA: " + elemento[i].value;
      }
    }
    for (let i = 0; i < checkBoxes.length; i++) {
      text = text + checkBoxes[i].value + ", ";
    }
    let resultPesquisa = document.getElementById('resultadoPesquisa');
    resultPesquisa.innerHTML = document.getElementById('resultadoPesquisa').innerHTML + text;

    selecionado();
  }

  function selecionado() {
    let categoria = document.querySelector('input[name="opt"]:checked').value;
    let afinidades = document.querySelectorAll('input[type="checkbox"]:checked');
    let afinidadesArray = [];
    afinidades.forEach(function(afinidade) {
      afinidadesArray.push(afinidade.value);
    });
  
    let cor = "";
    if (categoria == "EXATAS" && afinidadesArray.includes("Reúne cursos que envolvem o raciocínio lógico")) {
      cor = "";
    }else if(categoria == "HUMANAS" && afinidadesArray.includes("Compreensão do ser humano e dos processos históricos, filosóficos e comportamentais dos indivíduos")) {
        cor = "red";
    }else if (categoria == "BIOLÓGICAS" && afinidadesArray.includes("Conhecimento das ciências da vida, dos organismos vivos, incluindo os seres humanos, animais e vegetais")) {
      cor = "lightgreen";
    }else if (categoria == "ARTÍSTICAS" && afinidadesArray.includes("Formas de expressão de sentimentos e ideias por meio de linguagens artísticas")) {
        cor = "pink";
    
    } else {
      cor = "white";
    }
    document.querySelector('#bgPesquisa').style.backgroundColor = cor;
  }
  
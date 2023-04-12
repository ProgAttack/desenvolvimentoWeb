function sortear2(){
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let sortear = parseInt((Math.random() * (max - min) + min));
    document.getElementById('sorteio2').innerHTML = `O valor sorteado é ${sortear}`;


}
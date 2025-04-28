
function mediaAluno(){
    let nomeAluno = document.getElementById("nomeAluno").value;
    let primeiraNota = Number(document.getElementById("primeiraNota").value);
    let segundaNota = Number(document.getElementById("segundaNota").value);

    const calcularMedia = (primeiraNota + segundaNota) / 2;
    document.getElementById("mostrarNota").textContent = `Média das notas: ${calcularMedia.toFixed(2)}`;

   if(calcularMedia >= 6.5){
    document.getElementById("mostrarAprovacao").textContent = `Parabéns ${nomeAluno}! Você foi aprovado(a)`
    document.getElementById("mostrarAprovacao").style.color = "blue";
   }else {
    document.getElementById("mostrarAprovacao").textContent = `${nomeAluno} Você foi reprovado(a)`;
    document.getElementById("mostrarAprovacao").style.color = "red";
   }
    
}
mediaAluno();

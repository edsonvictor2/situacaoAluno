
function calcularPeso(){
    let nomePessoa = document.getElementById("nomePessoa").value;
 
    // Pegar sexo e altura
    let pegarSexo = document.getElementById("Masculino");
    let pegarSexo2 = document.getElementById("Feminino");
    let pegarAltura = parseFloat(document.getElementById("pegarAltura").value);
    let calcular;
  
    // Faz a condicao
    if(pegarSexo.checked){
        calcular = 22 * Math.pow(pegarAltura, 2);
    }else if (pegarSexo2.checked){
        calcular = 21 * Math.pow(pegarAltura, 2);
    }else {
        document.getElementById("mostrarResultado").textContent = "Por favor, selecione um sexo.";
        return;
    }
    // Mostrar resultados na tela
    document.getElementById("mostrarResultado").textContent = `${nomePessoa}, seu peso ideal é: ${calcular.toFixed(2)}`
}
calcularPeso();


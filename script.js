//Função para preencher o campo resultado
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
//Função de limpar o resultado
function clean(){
    document.getElementById('resultado').innerHTML = ""
}
//Função para apagar número por número
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}
//Somar o resultado
function calcular(){
    //Caso tenha números para somar
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    //Caso não tenha números ele volta uma mensagem
    else{
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
}

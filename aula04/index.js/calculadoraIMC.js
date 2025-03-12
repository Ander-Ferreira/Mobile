//Sistema de Modulos (ES6) -> Exportando

export const TabelaIMC = [
    {limite: 18.5, classificacao: "Magreza"},
    {limite: 18.5, classificacao: "Normal"},
    {limite: 18.5, classificacao: "Sobrepeso"},
    {limite: 18.5, classificacao: "Obesidade Grau 1"},
    {limite: 18.5, classificacao: "Obesidade Grau 2"},
    {limite: 18.5, classificacao: "Obesidade Grau 3"}
   ]

export const calcularIMC = (peso, altura) => {

   return peso / (altura * altura)
}
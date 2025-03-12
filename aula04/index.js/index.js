import moment, { isMoment } from "moment/moment.js"
import {TabelaIMC, calcularIMC} from "./calculadoraIMC.js"

console.log("Tabela do IMC")
console.table(TabelaIMC)

const peso = 80
const altura = 1.70

const resultado = calcularIMC(peso, altura)

console.log("Resultado do IMC ")
console.log(`IMC: ${resultado}`)

//Importando lib moment e usando

import { } from "moment";

const hoje = moment().locale('pt-br')

console.log(hoje.format('DD/MM/yyyy'))



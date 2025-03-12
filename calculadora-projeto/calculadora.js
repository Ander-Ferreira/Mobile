import moment from "moment";

export function soma(numero1, numero2){
    return numero1 + numero2
}

export function subtrair(numero1, numero2){
    return numero1 - numero2
}

export function multiplicar(numero1, numero2){
    return numero1 * numero2
}

export function dividir(numero1, numero2){
    return numero1 / numero2
}

export function calcularIdade(dataNascimento) {
     //O .diff() do Moment.js calcula a diferença entre duas datas em uma unidade especifica como anos, meses, dias, horas e outros...
    return moment().diff(moment(dataNascimento, 'YYYY-MM-DD'), 'years');
}



/*
    Sistemas de Notas Escolares

    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F
*/

function verificaNota(nota){
    if(nota >= 90 && nota <= 100){
        console.log('A')
    }else if(nota >= 80 && nota <= 89){
        console.log('B')
    }else if(nota >= 70 && nota <= 79){
        console.log('C')
    }else if(nota >= 60 && nota <= 69){
        console.log('D')
    }else if(nota < 60 && nota>=0){
        console.log('E')
    }else{
        console.log('Nota Inválida!')
    }
}

verificaNota(100)
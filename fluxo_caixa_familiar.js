/*
    Fluxo de caixa familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/

const family = {
    incomes: [12.5,20,50],
    expenses: [40,10,2,10.5]
}

function calculaSaldo(rec, desp){ 
    let totRec = totDesp = 0
    for(let value of rec){
        totRec += value 
    }
    for(let value of desp){
        totDesp += value
    }
    
    console.log(`Total de receitas da família: R$ ${totRec}`)
    console.log(`Total de despesas da família: R$ ${totDesp}`)
    
    if(totDesp > totRec){
        console.log('Seu saldo está negativo')
        console.log(`Saldo atual da família: R$ ${(totRec-totDesp).toFixed(2)}`)
    }else{
        console.log('Seu saldo está Positivo')
        console.log(`Saldo atual da família: R$ ${(totRec-totDesp).toFixed(2)}`)
    }
}   

calculaSaldo(family.incomes, family.expenses)
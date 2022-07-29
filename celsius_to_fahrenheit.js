/*
    Celsius em Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function temperatureConversor(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }else if(celsiusExists && !fahrenheitExists){    
        let celsius = degree.split('C')[0]
        let F =  celsius * 9/5 + 32
        console.log(`${celsius} °C em Fahrenheit é ${F} °F`)
    }else if(fahrenheitExists && !celsiusExists){
        let fahrenheit = degree.split('F')[0]
        let C =  (fahrenheit-32) * 5/9
        console.log(`${fahrenheit} °F em Celsius é ${C} °C`)
    }
}

try{
    temperatureConversor('50C')
}catch(Error){
    console.log(Error)
}
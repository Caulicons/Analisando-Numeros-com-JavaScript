let armazNum = []

function adicionar() {
    let num = document.getElementById('textn')
    let n = Number(num.value)
    
    //Alerta caso coloque um valor fora de 1 a 100
    if (n > 100 || n <1 || armazNum.indexOf(n) != -1){
        window.alert('Adicione um número entre 1 e 100')
    } else {
        //Adicionando um novo número
        let armaz = document.getElementById('texta')
        let newNum = document.createElement('option')
        newNum.innerHTML = `Valor ${n} adicionado.`
        armaz.appendChild(newNum)

        //Armazenando um novo número
        armazNum.push(n)
        console.log(armazNum)

        res.innerHTML = ''
    }

    //Essas duas funcionalidades abaixo são para apagar o valor existente no input e o 'focus' é para redirecionar direto par ao local do input
        num.value = ''
        num.focus()
}

function analisar() {

    let aNum = Number(armazNum.length)
    let maior = armazNum[0]
    let menor = armazNum[0]
    let somar = 0
    let media = 0
    
    if (armazNum.length == 0) {
        window.alert('Impossível analisar sem dados')       
    } else {
        let res = document.getElementById('res')

        for (let p in armazNum){
            somar += armazNum[p]
            if (armazNum[p] > maior ){
                maior = armazNum[p]
            }
            if (armazNum[p] < menor) {
                menor = armazNum[p]
            }
        }
        media = somar / aNum

        res.innerHTML = `<br> Ao todo, temos ${aNum} elementos. <br>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A somar de todos os valores é ${somar}</p>`
        res.innerHTML += `<p>A média é dos valores é ${media}</p>`
    }
}

document.addEventListener("keypress", (event) => {
    console.log();
    if(event.key === 'Enter') 
        adicionar()

    if(event.key === 1)  {}
})

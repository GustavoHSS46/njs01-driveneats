function enough() {
    let pop = document.getElementById('popUp')
    pop.classList.remove('display-none')
    const background = document.querySelector('.container')
    background.classList.add('blur')
}

function closedPopup() {
    let pop = document.getElementById('popUp')
    pop.classList.add('display-none')
    const background = document.querySelector('.container')
    background.classList.remove('blur')
}


var contador = 0
let pratoValue = 0
let bebidaValue = 0
let sobremesaValue = 0 
let pratoName = 0
let bebidaName = 0
let sobremesaName = 0
let valor = 0


function prato(obj) {
    const pratoSelecionado = document.querySelector(".prato-active");   

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("prato-active");
  
        obj.classList.add("prato-active");

        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        pratoValue = firstChild.nextElementSibling.getAttribute('value')

        conta()

        pratoName = obj.id
        console.log(pratoName)
    } else {
        obj.classList.add("prato-active");

        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        pratoValue = firstChild.nextElementSibling.getAttribute('value')
        conta()

        pratoName = obj.id
        console.log(pratoName)

        contador++
    }
    if (contador >= 3) {
        fechar();
    }  
}

function bebida(obj) {
    const bebidaSelecionado = document.querySelector(".bebida-active");   
  
  
    if (bebidaSelecionado !== null) {
        bebidaSelecionado.classList.remove("bebida-active");
        
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        bebidaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
  
        obj.classList.add("bebida-active");

        bebidaName = obj.id
        console.log(bebidaName)

    } else {
        obj.classList.add("bebida-active");
  
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        bebidaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
  
        contador++;

        bebidaName = obj.id
        console.log(bebidaName)
    }
    if (contador >= 3) {
        fechar()  
    }
}

function sobremesa(obj) {
    const sobremesaSelecionado = document.querySelector(".sobremesa-active"); 
      
  
    if (sobremesaSelecionado !== null) {
        sobremesaSelecionado.classList.remove("sobremesa-active");
        
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        sobremesaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()

    
        obj.classList.add("sobremesa-active");

        sobremesaName = obj.id
        console.log(sobremesaName)
    } else {
        obj.classList.add("sobremesa-active");
        
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        sobremesaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
        
        contador++;

        sobremesaName = obj.id
        console.log(sobremesaName)
    }
    if (contador >= 3) {
        fechar()
    }
}

function fechar() {
    let btnEnd = document.getElementById('fechado')
    btnEnd.classList.remove('display-none')
    let btnStart = document.getElementById('vazio')
    btnStart.classList.add('display-none')
} 

function conta() {
    const pratoPreco = parseFloat(pratoValue)
    const bebidaPreco = parseFloat(bebidaValue)
    const sobremesaPreco = parseFloat(sobremesaValue)
    valorTotal = pratoPreco + bebidaPreco + sobremesaPreco;
    console.log(valorTotal)
    valor = document.querySelector('.valor')
    valor.innerText = valorTotal.toFixed(2);
    console.log(valor.innerText)
}



function whatsapp() {
    

    

    const msm = `Olá, gostaria de fazer o pedido: \n • Prato: ${pratoName} \n • Bebida: ${bebidaName}\n • Sobremesa: ${sobremesaName}\n Total: ${valorTotal.toFixed(2)}`
    console.log(encodeURI(msm))
    
    const url = `https://wa.me/5518988143948?text=${msm}`

    window.open(url, '_blank')
}


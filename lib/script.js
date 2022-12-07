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
var pratoValue = 0
var bebidaValue = 0
var sobremesaValue = 0  

function prato(obj) {
    const pratoSelecionado = document.querySelector(".prato-active");   

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("prato-active");
  
        obj.classList.add("prato-active");

        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        pratoValue = firstChild.nextElementSibling.getAttribute('value')
        conta()

    } else {
        obj.classList.add("prato-active");

        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        pratoValue = firstChild.nextElementSibling.getAttribute('value')
        conta()

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
    } else {
        obj.classList.add("bebida-active");
  
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        bebidaValue = firstChild.nextElementSibling.getAttribute('value')
        conta()
  
        contador++;
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
    } else {
        obj.classList.add("sobremesa-active");
        
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        sobremesaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
        
        contador++;
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
    const valor = document.querySelector('.valor')
    valor.innerText = valorTotal.toFixed(2);
    console.log(valor.innerText)
}


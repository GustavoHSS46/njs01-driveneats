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

let contador = 0
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

    } else {
        obj.classList.add("prato-active");

        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        pratoValue = firstChild.nextElementSibling.getAttribute('value')
        conta()

        pratoName = obj.id


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


    } else {
        obj.classList.add("bebida-active");
  
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        bebidaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
  
        contador++;

        bebidaName = obj.id

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

    } else {
        obj.classList.add("sobremesa-active");
        
        const lastChild = obj.lastElementChild;
        firstChild = lastChild.firstChild; 
        sobremesaValue = firstChild.nextElementSibling.getAttribute('value')

        conta()
        
        contador++;

        sobremesaName = obj.id

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
    valor = document.querySelector('.valor')
    valor.innerText = valorTotal.toFixed(2);
}

function inputCheck() {
    const endereco = document.querySelector('.enderecoInput')
    const name = document.querySelector('.nameInput')
    
    if (name.value.length == 0) {
        alert('Por Favor Entre Com O Seu Nome E Endereço Corretamente')
    } else {
        if (endereco.value.length == 0) {
            alert('Por Favor Entre Com O Seu Nome E Endereço Corretamente')
        } else {
            whatsapp() 
        }
    } 
}

function whatsapp() {

    const msm = `Olá, gostaria de fazer o pedido: \n • Prato: ${pratoName} \n • Bebida: ${bebidaName}\n • Sobremesa: ${sobremesaName}\n Total: ${valorTotal.toFixed(2)}`
    
    const url = `https://wa.me/5518988143948?text=${msm}`

    window.open(url, '_blank')
}


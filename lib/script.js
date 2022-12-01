function notenough () {
    window.alert('Por Favor Selecione os 3 itens Para Fechar o Pedido')
}

function enough () {
    let nome = prompt('Por Favor Escreva o Seu Nome')
    let endereco = prompt(nome + ' Agora Escreva o Seu Endereco')
    window.alert(nome + ' Obrigado Pela Preferência, A Confirmação Do Pedido Será Enviada Pelo Whatassp')
}

function reply_click(obj)
{
    let id = obj.id;
    let idNow = document.getElementById(id);
    if (idNow.classList.contains('prato-active')){
        idNow.classList.remove('prato-active')
        let btnEnd = document.getElementById('btn-fechar')
        btnEnd.classList.add('display-none')
        let btnStart = document.getElementById('btn-esperar')
        btnStart.classList.remove('display-none')
    }else{
        idNow.classList.add('prato-active')  
        let btnEnd = document.getElementById('btn-fechar')
        btnEnd.classList.remove('display-none')
        let btnStart = document.getElementById('btn-esperar')
        btnStart.classList.add('display-none')
       
    }    
}
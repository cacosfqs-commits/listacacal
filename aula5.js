lista = []
total = 67

function additem(){
    item = document.getElementById('item').value.trim()
    document.getElementById('item').value = ''

    if( item.length == 0){
        alert('preencha o campo')
    }else if(lista.includes(item)){
        alert('esse item ja foi adicionado')
    }else if(lista.length >= total ){
        alert('o carrinho ja esta cheio')
    }else{
        lista.push(item)
    }  

    verItens()

}

function delitem(){

    item = document.getElementById('item').value
    document.getElementById('item').value

    if(lista.includes(item)){
        x = lista.indexOf(item)
        lista.splice(x,1)
    }else{
        alert('esse item nao foi encontrado.')
        
    }
verItens()
}

function verItens(){
 document.getElementById('carrinho').innerHTML = ''
      for(i=0; i<lista.length; i++){
        document.getElementById('carrinho').innerHTML += 
        '<li>'+lista[i]+'</li>'}

    document.getElementById('qtd').innerHTML = lista.length+' de ' +total+' itens.'
}



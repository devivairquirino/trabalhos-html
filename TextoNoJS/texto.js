function addtxt(){
    //muda a cor do fundo usado para teste
    document.body.style.backgroundColor='pink'

    //cria uma div 
    var div=document.createElement('div')
    //nomeia a div criada
    div.setAttribute("id","minhadiv")
    //cria dois paragrafos
    var pag1=document.createElement('p')
    var pag2=document.createElement('p')
    // cria um texto para depois inserir no paragrafo
    var txt1= document.createTextNode("Primero texto")
    // insere um texto no paragrafo
    pag2.textContent="Segundo texto"
    //insere o texto criado no paragrafo
    pag1.appendChild(txt1)

    //insere os paragrafos na div
    div.appendChild(pag1)
    div.appendChild(pag2)

    document.body.appendChild(div)

}
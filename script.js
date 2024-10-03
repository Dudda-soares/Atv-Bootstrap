const nome = document.getElementById('nome')
const tele = document.getElementById('tel')
const email = document.getElementById('email')
const nomes = []
const contato = []
const mail = []
const form = document.getElementById('form-contato')
const tabelaContatos = document.querySelector('#tablebody tbody');

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionar()
})

function inLista(n, l){
    if(l.indexOf (n) != -1){
        return true
    }else {
        return false
    }
}

function numeroNecessario(n){
    if(n.length < 11){
        return false
    }else{
        return true
    }
}

function adicionar(){
    const tipoContato = obterTipoContato()
    if(numeroNecessario(tele.value) && !inLista(nome.value, nomes) && !inLista(tele.value, contato) && !inLista(email.value, mail)){
        
        nomes.push(nome.value)
        contato.push(tele.value)
        mail.push(email.value)
        adicionaLinha(tipoContato)

        nome.value = ''
        tele.value = ''
        email.value =''
      
    }else{
        alert('Numero invalido ou dados ja encontrado na lista.')
    }
    
}
function obterTipoContato() {
    const fsex = document.getElementsByName('celtel');
    for (let i = 0; i < fsex.length; i++) {
        if (fsex[i].checked) {
            return fsex[i].value;
        }
    }
    return null;
}

function adicionaLinha(tipoContato){
    const icone = tipoContato === 'cel' ? 'imagens/celularcoracao.jpg' : 'imagens/telefonev1.png'

    const row = tabelaContatos.insertRow();

    const cellNome = row.insertCell(0);
    const cellTele = row.insertCell(1);
    const cellEmail = row.insertCell(2);
    
    cellNome.innerHTML = `<span class="nome-coluna" style="text-transform: uppercase;">${nome.value}</span>`;
    cellTele.innerHTML = `<span style="text-transform: uppercase; text-align: center;">${tele.value}</span>
                          <img  src="${icone}" style="width:37px; height:37px;margin-left:5px; border-radius: 15px;">`;
    cellEmail.innerHTML = `<span style="text-transform: uppercase;">${email.value}</span>`;

    row.style.backgroundColor = '#f08989'
}  




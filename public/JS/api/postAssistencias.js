
var form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    (async () => {

        try {
            e.preventDefault();

            let nomeTecnico = document.getElementById('tecnico').value
            let setorAtendimeneto = document.getElementById('setorAtendimeneto').value
            let tipoDeAtendimento = document.getElementById('tipoDeAtendimento').value
            let classificacaoDeAssistencia = document.getElementById('classificacaoDeAssistencia').value
            let motivoDaAssistencia = document.getElementById('motivoDaAssistencia').value
            let reclamacaoCliente = document.getElementById('reclamacaoCliente').value
            let observacao = document.getElementById('observacao').value
            let dataEHora = document.getElementById('dataEHora').value

            const rawResponse = await fetch('https://apichamados.herokuapp.com/assistencias', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nomeTecnico: nomeTecnico,
                    setorAtendimeneto: setorAtendimeneto,
                    tipoDeAtendimento: tipoDeAtendimento,
                    classificacaoDeAssistencia: classificacaoDeAssistencia,
                    motivoDaAssistencia: motivoDaAssistencia,
                    reclamacaoCliente: reclamacaoCliente,
                    observacao: observacao,
                    dataEHora: dataEHora
                })
            });

            /* Alert mensagem sucess */
            adicionaMensagem();
            setTimeout(redirect, 2000)

            const content = await rawResponse.json();
            console.log(content)

        } catch (err) {
            console.log(err);
        }
    })();
})

function adicionaMensagem (){
    let container = document.querySelector('.alertMsg');
    container.style.display = 'block';
}

function redirect (){
    window.location.href = "../pages/addAssistencia.html"
}

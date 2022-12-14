
/* GET ID PELA URL */
/* TELA DE INFORMAÇÃO */
const urlSearch = new URLSearchParams(window.location.search);
const orderParam = urlSearch.get("order")

async function getOrder() {
    try {

        const response = await fetch(`https://apichamados.herokuapp.com/assistencias/lista?order=${orderParam}`, {
            Method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });
        const urlConvertida = await response.json()

        urlConvertida.forEach(function (data) {
            dados(data);
        })

    } catch (err) {
        console.log(err);
    }

    function dados(data) {
        let text = document.querySelector('.dadosId');
        let order = document.querySelector('.order');
        let setor = document.querySelector('.setor');
        let tecnico = document.querySelector('.tecnico');
        let classificacao = document.querySelector('.classificacao');
        let motivo = document.querySelector('.motivo');
        let reclamacao = document.querySelector('.reclamacao');
        let observacao = document.querySelector('.observacao');
        let dataEHora = document.querySelector('.dataEHora');

        text.innerHTML = `Dados do registro ${data.order}`;
        order.innerHTML = `Id: ${data.order}`;
        setor.innerHTML = `Setro de atendimento: ${data.setorAtendimeneto}`;
        tecnico.innerHTML = `Tecnico: ${data.nomeTecnico}`;
        classificacao.innerHTML = `Classificação: ${data.classificacaoDeAssistencia}`;
        motivo.innerHTML = `Motivo da assitencia: ${data.motivoDaAssistencia}`;
        reclamacao.innerHTML = `Reclamação: ${data.reclamacaoCliente}`;
        observacao.innerHTML = `Observação: ${data.observacao}`;
        dataEHora.innerHTML = `Data e hora: ${data.dataEHora}`;
    }
}
getOrder();

/* DELETE */
const buttonDell = document.querySelector('.Confirmar');
buttonDell.addEventListener('click', () => {

    async function dellRegistro() {
        try {
            const response = await fetch(`https://apichamados.herokuapp.com/assistencias/listaDelete?order=${orderParam}`, {
                method: 'DELETE',
                Headers: {
                    Accept: 'application.json',
                    'Content-Type': 'application/json'
                },
            });
            location.href = "./listaAssistencia.html";

            return response;

        } catch (err) {
            console.log(err);
        }
    }
    dellRegistro();
})

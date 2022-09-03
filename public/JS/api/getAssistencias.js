
async function getUser() {
    try {

        const response = await fetch('http://localhost:3000/assistencias', {
            Method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        const urlConvertida = await response.json()

        for (var i = 0; i < urlConvertida.length; i++) {

            let ultimos = urlConvertida.slice(-10)

            var corpoTabela = document.querySelector('tbody');

            createDados(ultimos);

        }

    } catch (err) {
        console.log(err);
    }

    function createDados(ultimos) {
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        var tdTecnico = document.createElement('td');
        var tdSetor = document.createElement('td');
        var tdTipoAtendimento = document.createElement('td');
        var tdTclassificacaoDeAssistencia = document.createElement('td');
        var tdmotivoDaAssistencia = document.createElement('td');
        var tdreclamacaoCliente = document.createElement('td');
        var tdobservacao = document.createElement('td');
        var tddataEHora = document.createElement('td');

        tdId.textContent = ultimos[i].order;
        tdTecnico.textContent = ultimos[i].nomeTecnico;
        tdSetor.textContent = ultimos[i].setorAtendimeneto;
        tdTipoAtendimento.textContent = ultimos[i].tipoDeAtendimento;
        tdTclassificacaoDeAssistencia.textContent = ultimos[i].classificacaoDeAssistencia;
        tdmotivoDaAssistencia.textContent = ultimos[i].motivoDaAssistencia;
        tdreclamacaoCliente.textContent = ultimos[i].reclamacaoCliente;
        tdobservacao.textContent = ultimos[i].observacao;
        tddataEHora.textContent = ultimos[i].dataEHora;

        tr.appendChild(tdId);
        tr.appendChild(tdTecnico);
        tr.appendChild(tdSetor);
        tr.appendChild(tdTipoAtendimento);
        tr.appendChild(tdTclassificacaoDeAssistencia);
        tr.appendChild(tdmotivoDaAssistencia);
        tr.appendChild(tdreclamacaoCliente);
        tr.appendChild(tdobservacao);
        tr.appendChild(tddataEHora);
        corpoTabela.appendChild(tr);
    }
}
getUser();

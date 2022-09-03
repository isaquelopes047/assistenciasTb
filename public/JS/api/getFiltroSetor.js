const busca = document.querySelector('.valorBusca');
busca.addEventListener('focusout', () => {
    let setor = document.querySelector('.valorBusca').value;

    async function getSetor() {
        try {
            const response = await fetch(`http://localhost:3000/assistencias/busca?setorAtendimeneto=${setor}`, {
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

                var corpoTabela = document.querySelector('tbody');
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

                tdId.textContent = urlConvertida[i].order;
                tdTecnico.textContent = urlConvertida[i].nomeTecnico;
                tdSetor.textContent = urlConvertida[i].setorAtendimeneto;
                tdTipoAtendimento.textContent = urlConvertida[i].tipoDeAtendimento;
                tdTclassificacaoDeAssistencia.textContent = urlConvertida[i].classificacaoDeAssistencia;
                tdmotivoDaAssistencia.textContent = urlConvertida[i].motivoDaAssistencia;
                tdreclamacaoCliente.textContent = urlConvertida[i].reclamacaoCliente;
                tdobservacao.textContent = urlConvertida[i].observacao;
                tddataEHora.textContent = urlConvertida[i].dataEHora;

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

                let informa = document.querySelector('.encontradoRegistros')
                informa.innerHTML = `Foram encontrados ${urlConvertida.length} registros`;
            }

            const Limpa = document.querySelector('.valorBusca');
            Limpa.addEventListener('focusin', () => {
                location.reload(true);
            })

        } catch (err) {
            console.log(err);
        }
    }
    getSetor();
})

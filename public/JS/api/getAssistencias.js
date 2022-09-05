
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

            let ultimos = urlConvertida.slice(-10).reverse();

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
        var tdmotivoDaAssistencia = document.createElement('td');
        var tdreclamacaoCliente = document.createElement('td');
        var tddataEHora = document.createElement('td');
        var buttonDelete = document.createElement('a')

        tdId.textContent = ultimos[i].order;
        tdTecnico.textContent = ultimos[i].nomeTecnico;
        tdSetor.textContent = ultimos[i].setorAtendimeneto;
        tdmotivoDaAssistencia.textContent = ultimos[i].motivoDaAssistencia;
        tdreclamacaoCliente.textContent = ultimos[i].reclamacaoCliente;
        tddataEHora.textContent = ultimos[i].dataEHora;
        buttonDelete.innerHTML = `<img src="../icones/info.png" alt="">`
        buttonDelete.setAttribute("href", `./infoPage.html?order=${ultimos[i].order}`);

        tr.appendChild(tdId);
        tr.appendChild(tdTecnico);
        tr.appendChild(tdSetor);
        tr.appendChild(tdmotivoDaAssistencia);
        tr.appendChild(tdreclamacaoCliente);
        tr.appendChild(tddataEHora);
        tr.appendChild(buttonDelete);
        
        corpoTabela.appendChild(tr);
    }
}
getUser();

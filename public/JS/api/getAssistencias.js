
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

            let ultimos = urlConvertida.slice(-20).reverse();

            var corpoTabela = document.querySelector('tbody');
            createDados(ultimos);

            styleSetores();
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
        var buttonDelete = document.createElement('a');

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

//Style for sector in tds
// - Get value text and add style for your value
function styleSetores() {
    let myTable = document.querySelector("#table");
    let allTds = myTable.querySelectorAll("table td:nth-of-type(3)");
    let allTrs = myTable.querySelectorAll("tr");

    for (item of allTds.values()) {
        if (item.textContent === 'Cte') item.classList.add('cte')
        if (item.textContent === 'Alertas') item.classList.add('alertas')
        if (item.textContent === 'Acerto de Contas') item.classList.add('acertDeContas')
        if (item.textContent === 'Atendimento') item.classList.add('atendimento')
        if (item.textContent === 'Borracharia') item.classList.add('borracharia')
        if (item.textContent === 'Rastreamento') item.classList.add('rastreamento')
        if (item.textContent === 'Oficina') item.classList.add('oficina')
        if (item.textContent === 'Cargas') item.classList.add('cargas')
        if (item.textContent === 'Deposito') item.classList.add('deposito')
        if (item.textContent === 'Almoxarifado') item.classList.add('almoxarifado')
        if (item.textContent === 'Rh') item.classList.add('rh')
    }
}


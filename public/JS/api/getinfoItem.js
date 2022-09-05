
/* GET ID PELA URL */
const urlSearch = new URLSearchParams(window.location.search);
const orderParam = urlSearch.get("order")

async function getOrder() {
    try {

        const response = await fetch(`http://localhost:3000/assistencias/lista?order=${orderParam}`, {
            Method: 'GET',
            Headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            Cache: 'default'
        });
        const urlConvertida = await response.json()

        urlConvertida.forEach(function (data) {
            let text = document.querySelector('.dadosId')
            text.innerText = `Dados do registro ${data.order}`
        })

    } catch (err) {
        console.log(err);
    }
}
getOrder();

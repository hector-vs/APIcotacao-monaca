window.onload = function (){
    const cotar = document.querySelector('#cotar')
    cotar.addEventListener('click', function(){
        const opcoes = {
                method:'GET',
                mode: 'cors',
                cache:'default'
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes)
        .then(
            response => {response.json()
                .then(data => {
                    document.querySelector("#compra").textContent = data.USDBRL.bid;
                    document.querySelector("#venda").textContent = data.USDBRL.ask;
                    document.querySelector("#variacao").textContent = data.USDBRL.varBid;
                    document.querySelector("#maximo").textContent = data.USDBRL.high;
                    document.querySelector("#minimo").textContent = data.USDBRL.low;
                })
            }
        )
    });
}

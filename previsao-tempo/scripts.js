const key = "23f688cc65a2b51c8c8b958761d59826";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo agora em: " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".texto_previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade no Local: " + dados.main.humidity + "%";
    document.querySelector(".img_previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const inputCidade = document.querySelector(".input_cidade");
    const cidade = inputCidade.value;

    buscarCidade(cidade);

    // Limpa o campo de entrada após a busca
    inputCidade.value = "";
}

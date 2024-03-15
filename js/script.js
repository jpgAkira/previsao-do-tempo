const key = "3512613c7feb3afe8d770f39036672ff";
const lang = 'pt_br'

buscarDados('Viamão')

function atualizarDados(dados) {
    console.log(dados)
    document.querySelector('.mensagem').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temperatura').innerHTML = `${Math.round(dados.main.temp)}°C`
    document.querySelector('.emoji').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector('.tempo').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `${dados.main.humidity}%`
}

async function buscarDados(cidade) {
    document.getElementById('cidade').value = ''

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=3512613c7feb3afe8d770f39036672ff&lang=${lang}&units=metric`).then((response) => response.json()).catch((err) => console.log(err))
    atualizarDados(dados)
}

function buscar() {
    const cidade = document.getElementById('cidade').value;
    buscarDados(cidade)
}
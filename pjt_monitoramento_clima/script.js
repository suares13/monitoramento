document.getElementById("buscar").addEventListener("click", async function () {
    const cidade = document.getElementById("cidade").value;
    await obterClima(cidade);
});

async function obterClima(cidade) {
    const chave_api = '06006df9835a26d1916a4bdb051495e2'; // Coloque sua nova chave aqui
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave_api}&lang=pt_br&units=metric`;

    try {
        const resposta = await fetch(url); // Faz a requisição à API
        if (!resposta.ok) {
            throw new Error('Cidade não encontrada');
        }
        const dados = await resposta.json();
        mostrarClima(dados);
        adicionarHistorico(cidade);
    } catch (error) {
        alert(error.message); // Exibe um alerta se a cidade não for encontrada
    }
}

function mostrarClima(dados) {
    const cidade = dados.name; // Obtém o nome da cidade
    const descricao = dados.weather[0].description;
    const temperatura = dados.main.temp;
    const umidade = dados.main.humidity;
    const vento = dados.wind.speed;

    // Atualiza o conteúdo HTML
    document.getElementById("titulo").innerHTML = `Clima em ${cidade}`; // Atualiza o título
    document.getElementById("descricao").innerHTML = `<div class="resultado-item">Descrição: ${descricao.capitalize()}</div>`;
    document.getElementById("temperatura").innerHTML = `<div class="resultado-item">Temperatura: ${temperatura}°C</div>`;
    document.getElementById("umidade").innerHTML = `<div class="resultado-item">Umidade: ${umidade}%</div>`;
    document.getElementById("vento").innerHTML = `<div class="resultado-item">Velocidade do vento: ${vento} m/s</div>`;

    // Mostra o resultado
    const resultado = document.getElementById("resultado");
    resultado.style.display = "block"; // Torna visível
}

function adicionarHistorico(cidade) {
    const historico = document.getElementById("historico");
    const li = document.createElement("li");
    li.textContent = cidade;
    historico.appendChild(li);
}

// Função para capitalizar a primeira letra de uma string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};




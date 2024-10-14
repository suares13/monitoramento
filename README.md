# Monitoramento de Clima

![License](https://img.shields.io/github/license/VictoriaSuares/monitoramento-clima)

## Descrição

O **Monitoramento de Clima** é um projeto que permite consultar e visualizar informações climáticas em tempo real de qualquer cidade no mundo. 
Desenvolvido com HTML, CSS e JavaScript, o site exibe dados como temperatura atual, sensação térmica, umidade, e condições do clima, com base nas informações da API [OpenWeatherMap](https://openweathermap.org/).

## Funcionalidades

- Pesquisa de clima por cidade.
- Exibição de temperatura atual, sensação térmica, umidade e descrição do tempo.
- Interface amigável e visual esteticamente agradável.
- Atualização automática das informações climáticas ao pesquisar uma nova cidade.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do site.
- **CSS3**: Estilização e design responsivo.
  - Utilização da fonte **Archivo Black**.
- **JavaScript**: Lógica do projeto e integração com a API de clima.
- **OpenWeatherMap API**: Fonte de dados climáticos em tempo real.
- **Vercel**: Plataforma de deploy para hospedar o projeto.

## Instalação e Execução Local

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/VictoriaSuares/monitoramento-clima.git
   ```

2. Entre no diretório do projeto:
   ```bash
   cd monitoramento-clima
   ```

3. Instale as dependências (se houver):
   ```bash
   npm install
   ```

4. Execute o projeto:
   - Abra o arquivo `index.html` diretamente no navegador, ou
   - Utilize uma extensão como **Live Server** no VS Code para rodar localmente.

## Como Usar

1. Na página inicial, insira o nome da cidade desejada no campo de pesquisa.
2. Pressione "Enter" ou clique no botão de pesquisa.
3. O sistema exibirá as informações climáticas da cidade em tempo real.

## Contribuindo

Se você deseja contribuir com melhorias para este projeto, siga as etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature-minha-melhoria
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para a branch principal:
   ```bash
   git push origin feature-minha-melhoria
   ```
5. Abra um Pull Request.

## Melhorias Futuras

- Adicionar a previsão do tempo para os próximos dias.
- Implementar gráficos para mostrar a variação de temperatura ao longo do dia.
- Melhorar o design responsivo para dispositivos móveis.
- Implementar a escolha de diferentes unidades de medida (Celsius, Fahrenheit).


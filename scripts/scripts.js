function encrypt() {
    var input = document.getElementById('text-input').value;
    var encrypted = btoa(input);
    document.getElementById('encrypted-output').value = encrypted;
}
  
function decrypt() {
var encrypted = document.getElementById('encrypted-output').value;
var decrypted = atob(encrypted);
document.getElementById('decrypted-output').value = decrypted;
}


// Pesquisa (não funcional, por preguiça)
function performSearch() {
    var keyword = document.getElementById('search-input').value;
    var searchResults = searchWebsite(keyword);
    displayResults(searchResults);
  }

  function searchWebsite(keyword) {
    // Aqui você pode adicionar a lógica de busca no site.
    // Pode ser uma chamada a uma API ou uma busca em um conjunto de dados local.
    // Neste exemplo, vamos apenas retornar resultados fictícios.
    var results = [
      "Resultado 1",
      "Resultado 2",
      "Resultado 3",
      "Resultado 4",
      "Resultado 5"
    ];

    // Retorne os resultados da busca.
    return results;
}

function displayResults(results) {
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Limpa os resultados anteriores, se houver.

    if (results.length === 0) {
        resultsContainer.innerHTML = 'Nenhum resultado encontrado.';
        return;
    }

    var ul = document.createElement('ul');
    results.forEach(function(result) {
        var li = document.createElement('li');
        li.textContent = result;
        ul.appendChild(li);
});

resultsContainer.appendChild(ul);

/* 
Neste exemplo, temos um campo de entrada de texto (<input>) onde o usuário pode digitar uma palavra-chave e um botão de pesquisa (<button>) para acionar a busca. Quando o usuário clica no botão, a função performSearch() é chamada.

A função performSearch() obtém a palavra-chave digitada pelo usuário, chama a função searchWebsite() para realizar a busca e recebe os resultados. Em seguida, a função displayResults() é chamada para exibir os resultados na página.

A função searchWebsite() é onde você pode adicionar a lógica de busca específica para o seu site. Neste exemplo, retornamos resultados fictícios, mas você pode personalizar essa função para buscar os resultados de acordo com a sua necessidade, seja através de uma chamada a uma API externa ou uma busca em um conjunto de dados local.

A função displayResults() exibe os resultados na página. Ela cria uma lista (<ul>) e para cada resultado, cria um item de lista (<li>) e adiciona-o à lista. Em seguida, a lista completa é adicionada ao elemento com o ID "search-results" para ser exibida na página.

Lembre-se de salvar o código acima em um arquivo HTML e abri-lo em um navegador para testar o script de busca. Você pode personalizá-lo de acordo com suas necessidades, adicionando sua l
*/
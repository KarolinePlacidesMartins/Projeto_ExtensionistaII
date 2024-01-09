// Recupera o elemento do contador de acessos
var accessCountElement = document.querySelector('.access-count');

// Verifica se já existe um valor de contador armazenado no localStorage
var accessCount = localStorage.getItem('accessCount');

// Se não houver valor no localStorage, começa com 0
if (accessCount === null) {
    accessCount = 0;
}

// Atualiza o contador exibido na página
accessCountElement.textContent = accessCount;

// Incrementa o contador quando a página é carregada
accessCount++;
accessCountElement.textContent = accessCount;

// Armazena o novo valor no localStorage
localStorage.setItem('accessCount', accessCount);


function adicionarTarefa() {
    const input = document.getElementById('novaTarefa');
    if (input.value.trim() === '') return;

    const div = document.createElement('div');
    div.innerHTML = `
        ${input.value}
        <button onclick="this.parentElement.remove()">🗑️</button>
    `;
    document.getElementById('listaTarefas').appendChild(div);
    input.value = '';
}
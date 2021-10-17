let input = document.getElementById("input-principal"); // declaração da marioria das variaveis que serão usadas.
let button = document.getElementById("botao-adicionar");
let tarefa = document.getElementById("nome-tarefa-id");
let listaCompleta = document.getElementById("tarefas");
let arrayTask = [];
recarregarTarefas() //essa é a parte em que totas as tarefas que foram gravadas na memoria do navegador sejam recarregadas ao usuario.

function showTask() {
  let novali = "";
  arrayTask.forEach((tarefa, index, completedTask) => {
    novali =
      novali +
      `<li class="item-lista ${tarefa.concluida == true && 'completed'}">
  
      <button class="rocket" onclick="completedTask(${index})">
        <i class="fas fa-rocket"></i>
      </button>
      <p class="nome-tarefa ${tarefa.concluida == true && 'completed'}" id="nome-tarefa-id">${tarefa.tarefa}</p>
      <button class="delete" onclick="deletarTarefa(${index})">
        <i class="fas fa-trash"></i>
      </button>
    </li>`;
  });
  listaCompleta.innerHTML = novali;
  localStorage.setItem("lista", JSON.stringify(arrayTask))
}

function deletarTarefa(index) {
  arrayTask.splice(index, 1);
  showTask();
}
function addTask() {
  arrayTask.push({
    tarefa: input.value,
    concluida: false
  })
  
  showTask();
}
function completedTask(index){
  arrayTask[index].concluida = !arrayTask[index].concluida 
  console.log(arrayTask)
  showTask();
 }
 function recarregarTarefas() {
  let minhasTarefas = localStorage.getItem("lista")
  arrayTask = JSON.parse(minhasTarefas)

  showTask();
 }
button.addEventListener("click", addTask);

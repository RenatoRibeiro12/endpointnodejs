const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json());

app.listen(4000, () => console.log('servidor iniciado'));

let tarefas = [];

app.get('/tarefas', (req, res) => {
    res.json(tarefas)
});

app.post('/tarefas', (req, res) => {
  const { tarefa }  = req.body;
  const novaTarefa = {
    id: `${tarefas.length +1}`,
    tarefa,
  }

  tarefas.push(novaTarefa);

  return res.json(novaTarefa);

})

function buscarTarefasPorID(id) {
  return tarefas.filter( tarefas => tarefas.id == id)
}

app.put('/tarefas/:id', (req, res) => {


 const { id } = req.params;
 const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id == id);

 const { tarefa } = req.body;

 tarefaEncontrada.tarefa = tarefa;

 return res.json();

});


app.delete('/tarefas/:id', (req, res) => {

  const { id } = req.params;

  tarefas = tarefas.filter((u) => u.id != id);

  return res.json();
});






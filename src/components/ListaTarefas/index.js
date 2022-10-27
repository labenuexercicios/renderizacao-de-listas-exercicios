import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  TarefaCompleta
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["comer", "dormir", "estudar"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefaCompleta, setTarefaCompleta] = useState([])

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  
  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item, index) => {
      return index !== tarefa 
    })
    setLista(listaFiltrada);

    const tarefaFeita = lista.filter((item) => item === tarefa)
    setTarefaCompleta([...tarefaCompleta, tarefaFeita]);
  };

  function apertaEnter(event) {
    const x = event.key;
    if (x === "Enter") {
      const novaLista = [...lista, novaTarefa]
      setLista(novaLista)
      setNovaTarefa("")
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={(event)=>apertaEnter(event)}
        />
          <AddTaskButton onClick={adicionaTarefa} onKeyDown={apertaEnter}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(index)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaContainer>
      <ul>
          {tarefaCompleta.map((tarefa, index) => {
            return (
              <TarefaCompleta key={index}>
                <p>{tarefa}</p>
              </TarefaCompleta>
            );
          })}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}

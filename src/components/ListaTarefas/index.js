import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";

import { RemoverLista } from "../RemoverLista.js";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [variavel, setvariavel] = useState(0);
  const [pegavalor, setpegavalor] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  function verificaEnter(event) {
    if(event.key === 'Enter'){
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  }
  
  const removeTarefa = (tarefa) => {
    console.log(tarefa)
    setvariavel(1);
    setpegavalor(tarefa);

    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);

  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={verificaEnter}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton 
                onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
            
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      {variavel === 1 ? (
          <RemoverLista
          pegavalor = {pegavalor}
          bin = {bin}
          />
        ) : (
          <p></p>
        )}
    </ListaTarefasContainer>
  );
}

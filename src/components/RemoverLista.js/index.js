import React from "react";
import { ListaContainer, Tarefa } from "../ListaTarefas/styled";
import { ListaTarefasremovidas } from "./styled";


export function RemoverLista(props){

    return(
        <ListaContainer>
            <Tarefa>
                <ListaTarefasremovidas>
                <p><s>{props.pegavalor}</s></p>
                </ListaTarefasremovidas>
            </Tarefa>

        </ListaContainer>
 

    )
}
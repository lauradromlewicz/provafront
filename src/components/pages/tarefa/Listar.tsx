import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Tarefa {
  tarefaId: number;
  titulo: string;
  descricao: string;
  status: string;
  categoriaId: number;
}

const ListarTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tarefa/listar')
      .then(response => {
        setTarefas(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map(tarefa => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.categoriaId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarTarefas;

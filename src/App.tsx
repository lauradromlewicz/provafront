import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarTarefas from './components/pages/tarefa/Listar';
import CadastrarTarefa from './components/pages/tarefa/Cadastrar';
import AlterarTarefa from './components/pages/tarefa/Alterar';
import ListarConcluidas from './components/pages/tarefa/ListarConcluidas';
import ListarNaoConcluidas from './components/pages/tarefa/ListarNaoConcluidas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tarefas/listar" element={<ListarTarefas />} />
        <Route path="/tarefas/cadastrar" element={<CadastrarTarefa />} />
        <Route path="/tarefas/alterar" element={<AlterarTarefa />} />
        <Route path="/tarefas/listarconcluidas" element={<ListarConcluidas />} />
        <Route path="/tarefas/listarnaoconcluidas" element={<ListarNaoConcluidas />} />
      </Routes>
    </Router>
  );
}

export default App;

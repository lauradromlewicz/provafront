import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Categoria {
  categoriaId: number;
  nome: string;
}

const CadastrarTarefa: React.FC = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoriaId, setCategoriaId] = useState<number | null>(null);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categoria/listar')
      .then(response => {
        setCategorias(response.data);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/tarefa/cadastrar', {
      titulo,
      descricao,
      categoriaId
    }).then(() => {
      setTitulo('');
      setDescricao('');
      setCategoriaId(null);
    });
  };

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Descrição</label>
          <input value={descricao} onChange={e => setDescricao(e.target.value)} />
        </div>
        <div>
          <label>Categoria</label>
          <select value={categoriaId || ''} onChange={e => setCategoriaId(parseInt(e.target.value))}>
            <option value="" disabled>Selecione uma categoria</option>
            {categorias.map(categoria => (
              <option key={categoria.categoriaId} value={categoria.categoriaId}>{categoria.nome}</option>
            ))}
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarTarefa;

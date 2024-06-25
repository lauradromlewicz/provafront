import React, { useState } from 'react';
import axios from 'axios';

const AlterarTarefa: React.FC = () => {
  const [id, setId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id !== null) {
      axios.patch(`http://localhost:5000/api/tarefa/alterar/${id}`)
        .then(() => {
          setId(null);
        });
    }
  };

  return (
    <div>
      <h1>Alterar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID da Tarefa</label>
          <input value={id || ''} onChange={e => setId(parseInt(e.target.value))} />
        </div>
        <button type="submit">Alterar Status</button>
      </form>
    </div>
  );
};

export default AlterarTarefa;

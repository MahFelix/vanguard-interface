import { useState, useMemo } from 'react';

const Servicos = () => {
  const [busca, setBusca] = useState('');
  const servicos = [
    { id: 1, titulo: 'Direito Trabalhista', descricao: 'Resolvemos questões trabalhistas.' },
    { id: 2, titulo: 'Direito Civil', descricao: 'Consultoria e suporte em questões civis.' },
    { id: 3, titulo: 'Direito Imobiliário', descricao: 'Especialistas em imóveis.' },
    
  ];

  // Filtrando os serviços usando useMemo
  const servicosFiltrados = useMemo(() => {
    return servicos.filter((servico) =>
      servico.titulo.toLowerCase().includes(busca.toLowerCase())
    );
  }, [busca, servicos]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar serviços..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {servicosFiltrados.map((servico) => (
          <li key={servico.id}>
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Servicos;

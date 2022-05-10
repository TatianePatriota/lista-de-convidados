import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card } from '../../Componentes/Card';

export function Home(){
  const [listaDeConvidados, setListaDeConvidados] = useState('');
  const [convidados, setConvidados] = useState([]);

  function handleAddConvidados(){
    const newConvidados = {
      name: listaDeConvidados,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setConvidados(prevState => [...prevState, newConvidados]);
  }

  return (
    <div className='container'>
      <header>
        <h1>Lista de Convidados</h1>
        <div>
          <p>Tatiane Patriota</p>
          <img src="https://github.com/tatianepatriota.png" alt="Foto de Perfil" />
        </div>
      </header>

      <input type="text" placeholder= "Digite seu nome" onChange={evento => setListaDeConvidados(evento.target.value)}/>
      <button type="button"onClick={handleAddConvidados}>Adicionar Nome</button>

      {
        convidados.map(convidado => <Card key={convidado.time} name={convidado.name} time={convidado.time} />)
      }
    </div>
  )
}


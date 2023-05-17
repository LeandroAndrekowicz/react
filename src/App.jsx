import { useState } from 'react'
import './App.css'

function App() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);
  const [nota4, setNota4] = useState(0);
  const [media, setMedia] = useState(0);
  const [situacao, setSituacao] = useState('');

  function calculaMedia(){
    if(!nota1 || !nota2 || !nota3 || !nota4) return

    let media;
    media = (nota1 + nota2 + nota3 + nota4)/4;
    setMedia(media);
    if(media<4){
      setSituacao('Aluno reprovado!');
    }
    else if(media < 7){
      setSituacao('Aluno em recuperação!');
    }
    else{
      setSituacao('Aluno aprovado!');
    }
  }

  return (
    <>
      <div className='principal'>
        <label className='notas'>
          <p>Primeira nota</p>
          <input type='Number' id='nota1' value={nota1} onChange={(event) => setNota1(Number(event.target.value))}></input>
          <p>Segunda nota</p>
          <input type='Number' id='nota2' value={nota2} onChange={(event) => setNota2(Number(event.target.value))}></input>
          <p>Terceira nota</p>
          <input type='Number' id='nota3' value={nota3} onChange={(event) => setNota3(Number(event.target.value))}></input>
          <p>Quarta nota  </p>
          <input type='Number' id='nota4' value={nota4} onChange={(event) => setNota4(Number(event.target.value))}></input>
          <p></p>
          <button type='button' onClick={calculaMedia}>Calcular</button>
        </label>
      </div>
      <div className='resultado'>
        <label>
          {situacao &&
            <p>
              media = {media} <br></br>
              situacao = {situacao}
            </p>}
        </label>
      </div>
    </>
  )
}

export default App

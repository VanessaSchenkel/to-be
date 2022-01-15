import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import copyImg from "../assets/copy.svg";
import "../styles/home.css";

const baseURL = "http://localhost:5000";

export function Home() {
  const [newTextToTranslate, setNewTextToTranslate] = useState("");
  const [newTranslation, setNewTranslation] = useState("");

  // useEffect(() => {
  //   axios.get(baseURL).
  //   then(res => console.log(res));
  // }, []);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newTextToTranslate.trim() === "") {
      return;
    }

    const request = { text: newTextToTranslate };
    
    axios.post(baseURL+'/create', request)
        .then(response => {
          console.log(response)
          setNewTranslation(response.data)
          })
  }

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(newTranslation);
  }

  return (
    <div id='home'>
      <div className='escrita'>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder='Escreva seu texto para tradução'
            onChange={(event) => setNewTextToTranslate(event.target.value)}
            value={newTextToTranslate}></textarea>
          <button className='botao-traduzir' type='submit'>
            Traduzir
          </button>
        </form>
      </div>
      <div className='traducao'>
        <textarea
          disabled
          placeholder='Tradução vai aparecer aqui'
          value={newTranslation}></textarea>
        <button className='botao-copiar' onClick={copyRoomCodeToClipboard}>
          <img className='img-copiar' src={copyImg} alt='Copiar' />
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import copyImg from "../assets/copy.svg";
import "../styles/home.css";

const baseURL = "";

export function Home() {
  const [newTextToTranslate, setNewTextToTranslate] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/").
    then(res => console.log(res));
  }, []);

  function teste() {
    const article = { title: 'React POST Request Example' };
    axios.post('http://127.0.0.1:5000/create', article)
        .then(response => console.log(response))
  }

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newTextToTranslate.trim() === "") {
      return;
    }

    console.log(newTextToTranslate);

    teste()

    setNewTranslation(newTextToTranslate);
    setNewTextToTranslate("");
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

import { FormEvent, useState, useEffect } from "react";
import copyImg from "../assets/copy.svg";
import "../styles/home.css";

export function Home() {
  const [newTextToTranslate, setNewTextToTranslate] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/todo/getall")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newTextToTranslate.trim() === "") {
      return;
    }

    console.log(newTextToTranslate);

    await postData("http://localhost:5000/todo/create", {
      newTextToTranslate,
    }).then((data) => {
      console.log(data);
    });

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

import { FormEvent, useState } from "react";
import "../styles/home.css";

export function Home() {
  const [newTextToTranslate, setNewTextToTranslate] = useState("");

  function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newTextToTranslate.trim() === "") {
      return;
    }

    console.log(newTextToTranslate);

    setNewTextToTranslate("");
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
        <textarea disabled placeholder='Tradução vai aparecer aqui'></textarea>
      </div>
    </div>
  );
}

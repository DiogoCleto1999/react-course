import { useState } from "react";
import Input from "./Input";

function AddTask(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [errorTitleMessage, setTitleErrorMessage] = useState(""); // Mensagem de erro
  const [errorDescriptionMessage, setDescriptionErrorMessage] = useState(""); // Mensagem de erro

  const handleInputTitleChange = (event) => {
    setTitulo(event.target.value); // Atualiza o estado com o novo valor
    setTitleErrorMessage("");
  };

  const handleInputDescriptionChange = (event) => {
    setDescricao(event.target.value); // Atualiza o estado com o novo valor
    setDescriptionErrorMessage("");
  };
  /*
  const handleSubmitValues = () => {
    if (!titulo.trim()) {
      // Se o valor estiver vazio, mostra uma mensagem de erro
      setTitleErrorMessage("O título é obrigatório!!");
    } else if (!descricao.trim()) {
      setDescriptionErrorMessage("A descrição é obrigatória!!");
    } else {
      // Caso tenha um valor, pode "enviar" os dados para algum lugar
      if (!props.addTask(titulo, descricao)) {
        setTitleErrorMessage("Tarefa já existe!!");
        setTitulo("");
        setDescricao("");
      } else {
        setTitulo("");
        setDescricao("");
        setTitleErrorMessage(""); // Limpa a mensagem de erro após o envio bem-sucedido
        setDescriptionErrorMessage("");
      }
      //alert("Dados enviados!");

      // Limpa o input depois do envio
    }
  };*/

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        value={titulo}
        onChange={handleInputTitleChange}
        placeholder="Digite o título da tarefa"
      ></Input>
      {errorTitleMessage && (
        <p className="text-red-800 font-bold mt-1">{errorTitleMessage}</p> // Exibe mensagem de erro
      )}

      <Input
        type="text"
        value={descricao}
        onChange={handleInputDescriptionChange}
        placeholder="Digite a descrição da tarefa"
      />
      {errorDescriptionMessage && (
        <p className="text-red-800 font-bold mt-1">{errorDescriptionMessage}</p> // Exibe mensagem de erro
      )}
      <button
        onClick={() => {
          if (!titulo.trim()) {
            // Se o valor estiver vazio, mostra uma mensagem de erro
            setTitleErrorMessage("O título é obrigatório!!");
          } else if (!descricao.trim()) {
            setDescriptionErrorMessage("A descrição é obrigatória!!");
          } else {
            // Caso tenha um valor, pode "enviar" os dados para algum lugar
            if (!props.addTask(titulo, descricao)) {
              setTitleErrorMessage("Tarefa já existe!!");
              setTitulo("");
              setDescricao("");
            } else {
              setTitulo("");
              setDescricao("");
              setTitleErrorMessage(""); // Limpa a mensagem de erro após o envio bem-sucedido
              setDescriptionErrorMessage("");
            }
          }
        }}
        className="bg-slate-500 p-2 rounded-md text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;

import "../styles/form.css";
import Inputs from "./Inputs";
import LabelTech from "../Components/LabelTech";
import LabelNome from "../Components/LabelNome";
import LabelEmpresa from "../Components/LabelEmpresa";
import Btn from "../Components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

function Form() {
  const [nome, setNome] = useState("");
  const [tech, setTech] = useState("");
  const [empresa, setEmpresa] = useState("");
  const router = useRouter(); //import o useRouter

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleTechChange = (e) => {
    setTech(e.target.value);
  };

  const handleEmpresaChange = (e) => {
    setEmpresa(e.target.value);
  };

  const handleButtonClick = () => {
    //Faça qualquer lógica necessaria antes de redirecionar
    //ex: Redirecionar para outra pagina
    router.push("dashboard");
  };

  return (
    <div className="Form">
      <h1 className="title">Formulário Tech</h1>
      <LabelNome />
      <Inputs value={nome} onChange={handleNomeChange} />
      <LabelTech />
      <Inputs value={tech} onChange={handleTechChange} />
      <LabelEmpresa />
      <Inputs value={empresa} onChange={handleEmpresaChange} />
      <Btn onClick={handleButtonClick} />
    </div>
  );
}

export default Form;

import React, { useState } from "react";
import InputMask from "react-input-mask";  // Importando a biblioteca para máscara de CPF
import { useNavigate } from 'react-router-dom';



const EnviaReset = () => {
  const [cpf, setCpf] = useState("");
  const [isValid, setIsValid] = useState(true);
  
  // Função para validar o CPF (pode ser ajustada para validação matemática mais profunda)
  const validarCPF = (cpf) => {
    // Expressão regular para CPF com máscara
    const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    return regex.test(cpf);
  };

  // Função chamada ao digitar no campo de CPF
  const handleChange = (e) => {
    const valor = e.target.value;
    setCpf(valor);
    setIsValid(validarCPF(valor));  // Validação em tempo real
  };

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("CPF válido:", cpf);
      // Lógica de envio para o backend
    } else {
      console.log("CPF inválido!");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px", textAlign: "center" }}>
              Os e-mails @yahoo e @hotmail podem demorar até 72 horas para chegar devido às políticas de segurança do Yahoo e do Hotmail. Dessa forma, recomendamos fortemente que o reset de senha seja solicitado via 'WhatsApp' nos nossos canais de atendimento.
            </p>
            <span className="login100-form-title p-b-43">
              <img src="https://i.ibb.co/4wwmzwd7/atu-removebg-preview.png" width="319" height="200" alt="Logo" />
            </span>
            <div className="wrap-input100 validate-input">
              <InputMask
                className="input100"
                mask="999.999.999-99" // Máscara para CPF
                value={cpf}
                onChange={handleChange}
                placeholder=""
              />
              <span className="focus-input100"></span>
              <span className="label-input100">CPF</span>
            </div>
            {!isValid && <span style={{ color: "red", fontSize: "12px" }}>CPF inválido!</span>}
            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn" disabled={!isValid}>
                ENVIAR
              </button>
            </div>
            <div className="container-login100-form-btn" style={{ marginTop: "10px" }}>
              <button
                className="login100-form-btn"
                style={{ backgroundColor: "#dc3545" }}
                onClick={() => navigate("/")}
              >
                VOLTAR
              </button>
            </div>
            <p style={{ fontSize: "14px", color: "#666", marginTop: "15px", textAlign: "center" }}>
              Favor informar o CPF cadastrado nos nossos sistemas. Será enviado para o e-mail cadastrado o link para a criação da nova senha. Caso seja necessária a troca do e-mail, por favor entre em contato com a unidade para a troca do e-mail.
            </p>
          </form>
          <div
            className="login100-more"
            style={{
              backgroundImage: "url('https://i.ibb.co/3mS4D3FB/bg-01.png')",
              height: "865px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EnviaReset;

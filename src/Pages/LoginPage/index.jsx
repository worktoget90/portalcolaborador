import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom"; // Para navegação
import './style.css'; // Importando os estilos

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password });
        login(email, password); // Função de login, que provavelmente vai chamar a API para autenticação
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" onSubmit={handleSubmit}>
                        <span className="login100-form-title p-b-43">
                            <img src="https://i.ibb.co/4wwmzwd7/atu-removebg-preview.png" width="319" height="200" alt="Logo" />
                        </span>
                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input
                                className="input100"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input100"></span>
                            <span className="label-input100">Email</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input100"></span>
                            <span className="label-input100">Senha</span>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-32">
                            <div className="contact100-form-checkbox">
                                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                <label className="label-checkbox100" htmlFor="ckb1">
                                    Lembre de mim
                                </label>
                            </div>
                            <div>
                                <Link to="/reset-password" className="txt1">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                        </div>
                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn">
                                ENTRAR
                            </button>
                        </div>
                        <div className="container-login100-form-btn" style={{ marginTop: "10px" }}>
                            <button
                                className="login100-form-btn"
                                style={{ backgroundColor: "#28a745" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Navega para a página de cadastro
                                    window.location.href = "/enviaReset";
                                }}
                            >
                                CADASTRE-SE
                            </button>
                        </div>
                    </form>
                    <div className="login100-more" style={{ backgroundImage: "url('https://i.ibb.co/3mS4D3FB/bg-01.png')",
                         height:"865px",
                     }}></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

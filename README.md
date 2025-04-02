# Projeto de Autenticação e Recuperação de Senha
![Imagem do Projeto](https://i.ibb.co/nqMfFBDW/index.png)

Este projeto consiste em um sistema simples de login e recuperação de senha utilizando **React**, onde os usuários podem se autenticar, além de solicitar a recuperação de senha utilizando o CPF.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React Router DOM**: Para navegação entre páginas.
- **React Input Mask**: Para aplicar a máscara no campo de CPF.
- **Context API**: Para gerenciamento de estado de autenticação (Login).

## Funcionalidades

### 1. Tela de Login (LoginPage)

A página de login permite que o usuário insira seu **email** e **senha** para se autenticar no sistema. A autenticação é gerenciada por meio de um contexto de autenticação. A tela também oferece a opção de **lembrar senha** e **recuperação de senha**.

#### Principais recursos:
- Campos de **email** e **senha** com validação básica.
- **Botão de login** que chama a função de autenticação.
- **Link** para página de **recuperação de senha**.
- **Redirecionamento** para página de **cadastro**.

### 2. Tela de Recuperação de Senha (EnviaReset)

A página de recuperação de senha permite que o usuário insira o **CPF** cadastrado para receber um link de recuperação de senha. A validação do CPF é realizada em tempo real, utilizando uma máscara de CPF.

#### Principais recursos:
- **Máscara de CPF** com validação em tempo real.
- **Aviso** sobre possíveis atrasos nos e-mails de recuperação para determinados provedores.
- **Botão de envio** que dispara a ação de recuperação se o CPF for válido.
- **Botão de voltar** que redireciona o usuário de volta para a tela de login.

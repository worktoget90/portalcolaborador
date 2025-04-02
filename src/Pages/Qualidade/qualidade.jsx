import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../contexts/auth";
import { useNavigate, useParams } from "react-router-dom";

import { lista_proventos, envia_CC } from "../../services/api";

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { set, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Checkbox from "../Components/checkbox";

// import { Row, Form, Button, Container, Tab, Tabs, Table, Col } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Accordion from 'react-bootstrap/Accordion';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carrocel from '../Components/carrocel';


const schema = yup.object({}).required();

const Qualidade = () => {


    return (
        <div className="Qualidade">
            <Container>
                <h2> Portal da Qualidade </h2>
                <br />

                <p> Você chegou no portal da <i className="fa-regular fa-star fa-spin"></i> <b> Qualidade !! </b> . <i className="fa-regular fa-star fa-spin"></i> </p>
                <br />
                <p> Ainda não esta pronto. <i className="fa-solid fa-person-digging"></i> </p>
                <br />

                <p>
                    Aqui, tome um cafézinho  <i className="fa-solid fa-mug-hot"></i> enquanto você espera
                </p>

            </Container>




        </div>
    )
}
export default Qualidade;
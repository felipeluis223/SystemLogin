import TextField from '@mui/material/TextField';
import { AiOutlineLogin } from "react-icons/ai";
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import React, { useState } from "react";
import './styles/login.css'

function Cadastro(){
	const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

	const [errorText, setErrorText] = useState('')
	const [nomeUser, setNomeUser] = useState('')
	const [telefoneUser, setTelefoneUser] = useState('');
	const [emailUser, setEmailUser] = useState('')



    return (
        <div className="containerLogin flex justify-center flex-wrap absolute">
        	<div className="w-[100%] flex flex-row mb-3.5 text-5xl text-sky-500 flex-row flex-wrap">
        		<AiOutlineLogin />
	        	<h1>Cadastrar</h1>
	        	<span className="text-2xl text-sky-500">Crie uma conta para ter acesso.</span>
	        </div>
	        <form action="">
	        	<div className="w-[100%] flex flex-row justify-evenly flex-wrap">
		         	<div className="w-[96%] mt-5">
		         		<TextField
				          required
				          id="standard-basic" label="Nome"
				          placeholder="digite seu nome..."
				          className="w-[100%]"
				          onChange={(e)=>setNomeUser(e.target.value)}
				          error={nomeUser === ""}
				          helperText={nomeUser === ""?"Campo vazio":''}
				        />
		         	</div>

		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="Telefone"
				          placeholder="(dd)xxxxx-xxxx"
				          className="w-[100%]"
				          onChange={(e)=>setTelefoneUser(e.target.value)}
				          error={telefoneUser === ""}
				          helperText={telefoneUser === ""?"Campo vazio":''}
				        />
		         	</div>

		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="E-mail"
				          placeholder="exemple@gmail.com"
				          className="w-[100%]"
				          onChange={(e)=>setEmailUser(e.target.value)}
				          error={setEmailUser === ""}
				          helperText={emailUser === ""?"Campo vazio":''}
				        />
		         	</div>
		         </div>
		         <div className="w-[100%] flex justify-center align-center mt-5">
		         	<Button variant="contained">Finish</Button>
		         </div>
		    </form>
        </div>
    )
}

export default Cadastro;
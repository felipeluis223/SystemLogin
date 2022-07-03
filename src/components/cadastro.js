import TextField from '@mui/material/TextField';
import { AiOutlineLogin } from "react-icons/ai";
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import './styles/login.css'

function Cadastro(){
    return (
        <div className="containerLogin flex justify-center flex-wrap absolute">

        	<div className="w-[100%] flex flex-row mb-3.5 text-5xl text-sky-500 flex-row flex-wrap">
        		<AiOutlineLogin />
	        	<h1>Cadastrar</h1>
	        	<span className="text-2xl text-sky-500">Crie uma conta para ter acesso.</span>
	        </div>
	        <form action="">
	        	<div className="w-[100%] flex flex-row justify-evenly flex-wrap">
		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="Nome"
				          placeholder="digite seu nome..."
				          className="w-[100%]"
				        />
		         	</div>

		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="Telefone"
				          placeholder="(dd)xxxxx-xxxx"
				          className="w-[100%]"
				        />
		         	</div>

		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="E-mail"
				          placeholder="exemple@gmail.com"
				          className="w-[100%]"
				        />
		         	</div>

		         	<div className="w-[48%] mt-5">
		         		<TextField
				          required
				          id="outlined"
				          label="Password"
				          placeholder="crie uma senha..."
				          className="w-[100%]"
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
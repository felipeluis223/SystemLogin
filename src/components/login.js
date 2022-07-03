import TextField from '@mui/material/TextField';
import { AiOutlineLogin } from "react-icons/ai";
import Button from '@mui/material/Button';
import ReactDOM from 'react-dom';
import './styles/login.css'

function Login(){
    return (
        <div className="containerLogin flex justify-center flex-wrap absolute">

        	<div className="w-[100%] flex flex-row mb-3.5 text-5xl text-sky-500">
        	<AiOutlineLogin />
	        	<h1>Login</h1>
	        </div>

        	<div className="w-[100%] flex flex-row justify-evenly">
	         	<div className="w-[48%]">
	         		<TextField
			          required
			          id="outlined"
			          label="E-mail"
			          placeholder="exemple@gmail.com"
			          className="w-[100%]"
			        />
	         	</div>

	         	<div className="w-[48%]">
	         		<TextField
			          required
			          id="outlined"
			          label="Password"
			          placeholder="password"
			          className="w-[100%]"
			        />
	         	</div>
	         </div>
	         <div className="w-[100%] flex justify-center align-center mt-5">
	         	<Button variant="contained">Login</Button>
	         </div>

        </div>
    )
}

export default Login;
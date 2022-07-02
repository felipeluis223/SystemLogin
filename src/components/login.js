import { BsPersonCircle }from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import ReactDOM from 'react-dom';
import './styles/login.css'
import '../index.css'

function Login(){
    return (
        <div className="containerLogin">
         	<div className="">
            {/*    <BsPersonCircle /> */}
                <TextField className="text-3xl font-bold text-white" id="outlined-basic" label="E-mail" variant="outlined" />
            </div>
            
			<div className="">
            {/*    <BsPersonCircle /> */}
                <TextField className="text-3xl font-bold text-white" id="outlined-basic" label="E-mail" variant="outlined" />
            </div>
            <h2 className="text-white">Ola</h2>
            

        </div>
    )
}

export default Login;
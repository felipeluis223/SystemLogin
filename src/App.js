import Login from './components/login'
import Cadastro from './components/cadastro.js'
import './index.css';

function App() {
  return (
    <div className="App">
     <div className="bg-black absolute lineLogin"></div> 
  {/*   <Login /> */}
	    <Cadastro />
    </div>
  );
}

export default App;

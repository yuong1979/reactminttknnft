import './App.css';
// import './MintToken';
import Minttoken from './MintToken';
import MintNft from './MintNft';
import SendSol from './sendSol';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Minttoken />
        <MintNft />
        <SendSol />
      </header>
    </div>
  );
}

export default App;

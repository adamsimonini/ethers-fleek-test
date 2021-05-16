import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
import {ethers} from 'ethers'

function App() {
  // let array = []

  const provider = new ethers.providers.InfuraProvider( 4, 'f6268155b09c4c5f87492dc2e5de22a0')
  console.log(provider)

  return (
    <div className="App">
      <Navbar />
      <List />
    </div>
  );
}

export default App;

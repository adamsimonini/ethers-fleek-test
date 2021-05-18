import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
import {ethers} from 'ethers'
import abi from './data/abi.json'

function App() {
  
  const [workshops, setWorkshops] = React.useState([])

  React.useEffect(() => {
    fetchWorkshopData()
  }, [])

  const fetchWorkshopData = async () => { 
    const provider = new ethers.providers.InfuraProvider( 4, 'f6268155b09c4c5f87492dc2e5de22a0')
    const contractAddr = '0xC4b3fD5dB1BcDeb8CB56E6530c52F2ae5265dAE0'
    const contract = new ethers.Contract(contractAddr, abi ,provider)
    console.log(contract)
    const workshops = await contract.getWorkshops() 
    console.log(workshops)
    setWorkshops(workshops)
  }

  return (
    <div className="App">
      <Navbar />
      <List listData={workshops} />
    </div>
  );
}

export default App;

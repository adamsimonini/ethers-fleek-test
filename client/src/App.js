import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { ethers } from "ethers";
import abi from "./data/abi.json";

function App() {
	const [workshops, setWorkshops] = useState([]);

	const fetchWorkshopData = async () => {
		const provider = new ethers.providers.InfuraProvider(4, "bd99e181b4ef4f8aa9c61c1a65bed353");
		console.log(provider);
		const contractAddress = "0xC4b3fD5dB1BcDeb8CB56E6530c52F2ae5265dAE0";
		// 0xC4b3fD5dB1BcDeb8CB56E6530c52F2ae5265dAE0
		const contract = new ethers.Contract(contractAddress, abi, provider);
		console.log(contract);

		const workshops = await contract.getWorkshops();
		console.log(workshops);
		setWorkshops(workshops);
	};

	useEffect(() => {
		fetchWorkshopData();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<List listData={workshops} />
		</div>
	);
}

export default App;

import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'


function App() {
  let array = [1,2,3,4,5,6,7,8]
  return (
    <div className="App">
      <Navbar />
      <List listArray={array} />
    </div>
  );
}

export default App;

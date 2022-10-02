import './App.css';
import { MainTable } from "./components/MainTable"
import { SearchBar } from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <h3 id="page-header">Inventory</h3>
      <SearchBar />
      <MainTable />
    </div>
  );
}

export default App;

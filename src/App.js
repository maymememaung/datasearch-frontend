import './App.css';
import {useEffect, useState} from 'react';
import {MainTable} from "./components/MainTable"
import {SearchBar} from "./components/SearchBar"

function App() {

    const dummyRecords = [
        {
            "id": 2,
            "name": "Macbook",
            "quantity": 9,
            "brand_id": 1,
            "category_id": 1
        }, {
            "id": 1,
            "name": "Water Bottle",
            "quantity": 3,
            "brand_id": 3,
            "category_id": 2
        }
    ]

    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState("1")
    const [headers, setHeaders] = useState([])
    const [records, setRecords] = useState(dummyRecords)

    const baseUrl = "https://q60xzpit4j.execute-api.us-east-1.amazonaws.com/dev"

    useEffect(() => {
        fetch(baseUrl + "/headers").then((res) => res.json()).then((res) => {
            setHeaders(res)
        }).catch((Error) => {
            console.log(Error);
        });
    }, []);

    useEffect(() => {
        fetch(baseUrl + "/items").then((res) => res.json()).then((res) => {
            setRecords(res);
        }).catch((Error) => {
            console.log(Error);
        });
    }, []);

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <div className="App">
            <h3 id="page-header">Inventory</h3>
            <SearchBar onQueryChange={handleQueryChange}
                onFilterChange={handleFilterChange}/>
            <MainTable headers={headers} data={records}/>
        </div>
    );
}

export default App;

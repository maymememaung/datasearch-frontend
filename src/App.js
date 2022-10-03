import './App.css';
import { useEffect, useState } from 'react';
import { MainTable } from "./components/MainTable"
import { SearchBar } from "./components/SearchBar"

function App() {

    const [query, setQuery] = useState("")
    const [filter, setFilter] = useState("1")
    const [headers, setHeaders] = useState([])
    const [records, setRecords] = useState(null)
    const [currRecords, setCurrRecords] = useState(null)

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
            setRecords(res)
            setCurrRecords(res)
        }).catch((Error) => {
            console.log(Error);
        });
    }, []);

    useEffect(() => {
        if (records) {
            let property = ""

            switch(filter) {
                case "1": property = "item_name"; break;
                case "2": property = "brand_name"; break;
                case "3": property = "category_name"; break;
                default: property = "item_name";
            }
            let regex = new RegExp(query, 'i')
            let filtered_records = records.filter((r) => regex.test(r[property]))
            setCurrRecords(filtered_records)
        }
    }, [query]);

    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const sortColumn = (e) => {
        let records = [...currRecords]
        
        switch (e.target.parentNode.innerText) {
            case "Item Id": records.sort((a, b) => a["id"] - b["id"]); break;
            case "Item Name": records.sort((a, b) => a["item_name"].localeCompare(b["item_name"])); break;
            case "Brand": records.sort((a, b) => a["brand_name"].localeCompare(b["brand_name"])); break;
            case "Category": records.sort((a, b) => a["category_name"].localeCompare(b["category_name"])); break;
            case "Quantity": records.sort((a, b) => a["quantity"] - b["quantity"]); break;
        }
        setCurrRecords(records)
    }

    return (
        <div className="App">
            <h3 id="page-header">Inventory</h3>
            <SearchBar onQueryChange={handleQueryChange}
                onFilterChange={handleFilterChange} />
            <MainTable headers={headers} data={currRecords} sortFunc={sortColumn} />
        </div>
    );
}

export default App;

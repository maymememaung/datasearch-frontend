import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SearchBar = (props) => {
  return (
    <InputGroup className="mb-3 search-bar">
        <Form.Select aria-label="Search Filter" onChange={props.onFilterChange}>
            <option value="1">Item Name</option>
            <option value="2">Brand</option>
            <option value="3">Category</option>
        </Form.Select>
        <Form.Control aria-label="Query String" onChange={props.onQueryChange}/>
    </InputGroup>
  );
}
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const SearchBar = () => {
  return (
    <InputGroup className="mb-3 search-bar">
        <Form.Select aria-label="Default select example">
            <option value="1">Item Name</option>
            <option value="2">Brand</option>
            <option value="3">Category</option>
        </Form.Select>
        <Form.Control aria-label="Text input with dropdown button" />
    </InputGroup>
  );
}
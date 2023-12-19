import Form from 'react-bootstrap/Form';

function MySelect() {
  return (
    <Form.Select aria-label="Default select example">
      
      <option value="1">fantasy</option>
      <option value="2">history</option>
      <option value="3">horror</option>
      <option value="4">romance</option>
      <option value="5">scify</option>
    </Form.Select>
  );
}

export default MySelect;
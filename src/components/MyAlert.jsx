import Alert from 'react-bootstrap/Alert';

const MyAlert = (props) => {
  return (
        <Alert variant="info">
          {props.MyText}
        </Alert>
  );
}

export default MyAlert;
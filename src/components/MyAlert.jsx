import Alert from 'react-bootstrap/Alert';

const MyAlert = (props) => {
  return (
        <Alert variant={props.color}>
          {props.MyText}
        </Alert>
  );
}

export default MyAlert;
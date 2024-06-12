import Spinner from 'react-bootstrap/Spinner';

function SpinIt() {
  return (
    <Spinner animation="border" role="status" className='text-center'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinIt;
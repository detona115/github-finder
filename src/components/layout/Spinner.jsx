import spinner from './assets/spinner2.gif';

function Spinner() {
  return (
    <div className='mt-20'>
      <img
        className='text-center mx-auto'
        width={180}
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
}

export default Spinner;

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search Github profiles and see profile detail.
        <br />
        Implemented by
        <strong>
          {' '}
          <a href='https://www.linkedin.com/in/andy-k-76a983110/'>ANDY KIAKA</a>
        </strong>
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
    </div>
  );
}

export default About;

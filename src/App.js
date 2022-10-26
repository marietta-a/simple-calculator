import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 className="text-3xl font-bold underline italic">
          Hello world!
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <div className="grid grid-cols-4 gap-1 w-1/5 rounded-sm ml-16 mt-16 bg-gray-400">
              <div className='col-span-4 bg-yellow-100'>test</div>
              <div className='col-span-4 bg-yellow-100'>test2</div>
              <div className='col-span-1 p-4 h-16 rounded-md bg-black text-white'>AC</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>%</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>/</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>Back</div>

              <div className='col-span-1 p-4 rounded-md bg-black text-white'>7</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>8</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>9</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>*</div>

              <div className='col-span-1 p-4 rounded-md bg-black text-white'>4</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>5</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>6</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>-</div>
              
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>1</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>2</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>3</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>+</div>

              <div className='col-span-2 p-4 rounded-md bg-black text-white'>0</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>.</div>
              <div className='col-span-1 p-4 rounded-md bg-black text-white'>-</div>
        </div>
    </div>
  );
}

export default App;

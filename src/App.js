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
        <div className="table border-separate border-spacing-2 border border-slate-400 w-1/2">
            <div className="table-row bg-white">
              <div className='table-cell'></div>
            </div>
            <div className="table-row bg-white">
              <div className='table-cell'></div>
            </div>
            <div className="table-row row text-white">
              <div className='table-cell border border-slate-300 rounded-md bg-black'>AC</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>%</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>/</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>Back</div>
            </div>
            <div className="table-row row text-white">
              <div className='table-cell border border-slate-300 rounded-md bg-black'>7</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>8</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>9</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>*</div>
            </div>
            <div className="table-row row text-white">
              <div className='table-cell border border-slate-300 rounded-md bg-black'>4</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>5</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>6</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>-</div>
            </div>
            <div className="table-row row text-white">
              <div className='table-cell border border-slate-300 rounded-md bg-black'>1</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>2</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>3</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>+</div>
            </div>
            <div className="table-row row text-white">
              <div className='table-cell col-span-2 border border-slate-300 rounded-md bg-black'>0</div>
              <div></div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>.</div>
              <div className='table-cell border border-slate-300 rounded-md bg-black'>-</div>
            </div>
        </div>
    </div>
  );
}

export default App;

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
        <div className="table w-1/2">
            <div className="table-row bg-white">
              <div className='table-cell'></div>
            </div>
            <div className="table-row bg-white">
              <div className='table-cell'></div>
            </div>
            <div className="table-row row">
              <div className='table-cell text-emerald-900 button'>AC</div>
              <div className='table-cell button'>%</div>
              <div className='table-cell button'>/</div>
              <div className='table-cell button'>Back</div>
            </div>
            <div className="table-row row">
              <div className='table-cell button'>7</div>
              <div className='table-cell button'>8</div>
              <div className='table-cell button'>9</div>
              <div className='table-cell button'>*</div>
            </div>
            <div className="table-row row">
              <div className='table-cell button'>4</div>
              <div className='table-cell button'>5</div>
              <div className='table-cell button'>6</div>
              <div className='table-cell button'>-</div>
            </div>
            <div className="table-row row">
              <div className='table-cell button'>1</div>
              <div className='table-cell button'>2</div>
              <div className='table-cell button'>3</div>
              <div className='table-cell button'>+</div>
            </div>
            <div className="table-row row">
              <div className='table-cell button' span='2'>0</div>
              <div className='table-cell button'></div>
              <div className='table-cell button'>.</div>
              <div className='table-cell button'>-</div>
            </div>
        </div>
    </div>
  );
}

export default App;

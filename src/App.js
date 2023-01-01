import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';

function App() {
  return (
    <div className="App">
      <Banner 
        title="Welcome to SexTant"
      />
      <Exhibit heading="My Exhibit">
        <p>This is my exhibit.</p>
      </Exhibit>
    </div>
  );
}

export default App;

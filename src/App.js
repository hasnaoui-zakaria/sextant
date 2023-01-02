
import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import IpFetcher from './IpFetcher.js';
import PylonWebSocket from './PylonWebSocket.js';

function App() {
  return (
    <div className="App">
      <Banner 
        title="Welcome to SexTant"
      />
      <Exhibit name="IPv4">
        <IpFetcher url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="IPv6">
        <IpFetcher url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Pylon latency">
        <PylonWebSocket />
      </Exhibit>    
    </div>
  );
}

export default App;

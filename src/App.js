import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import IpFetcher from './IpFetcher.js';

function App() {
  return (
    <div className="App">
      <Banner 
        title="Welcome to SexTant"
      />
      <Exhibit heading="My Exhibit" name="IPv4">
        <IpFetcher ipType="ipv4" />
      </Exhibit>
      <Exhibit heading="My Exhibit" name="IPv6">
        <IpFetcher ipType="ipv6" />
      </Exhibit>    
    </div>
  );
}

export default App;

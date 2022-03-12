import './style.css';
import ProfilePhoto from "./components/ProfilePhoto";
import FullName from "./components/Address";
import Address from "./components/FullName";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfilePhoto/>
        <Address />
        <FullName />
      
      </div>
    </div>
  );
}

export default App;
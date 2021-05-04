import Topbar from './topbar'
import Sidebar from './sidebar'
import Maincontent from './maincontent' 
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <Topbar></Topbar>
      <div class="container-fluid ">
        <div class="row">
          <Sidebar></Sidebar>
          <Maincontent></Maincontent>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

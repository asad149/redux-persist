
import './App.css';
import FirstScreen from './Pages/FirstScreen';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddPost from './Components/AddPost';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
    <Routes>
        {/* <Route path="/addPost" element={<AddPost />} /> */}
        <Route path="/" element={<FirstScreen />} />
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Header from './components/Header';
import Add from './components/Add';
import Watched from './components/Watched';
import Watchedlist from './components/Watchedlist';

function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
       
         <Routes>
         <Route path='/' element={<Watchedlist/>} />
         <Route path='/Watched' element={<Watched/>} />
         <Route path='/Add' element={<Add />}/>

         </Routes>
       </Router>
    </div>
  );
}

export default App;

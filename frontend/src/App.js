import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & component 
import Home from './pages/Home'
import Navbar from './components/navbar'
import WorkoutForm from './components/workoutForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/workout-form"
              element={<WorkoutForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

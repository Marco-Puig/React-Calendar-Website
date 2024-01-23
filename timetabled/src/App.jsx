import './App.css';

//import Calender component
import Calendar from './components/Calendar'

// main() = main App
const App = () => {

  // returns html
  return (
    <div className="App">
    <h1>React Calendar</h1>
    <h2>A Calendar that shows my Schduele!</h2>
    <Calendar />
      
    </div>
  )
}

export default App;
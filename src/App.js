import './App.scss';

//components
import NavigationBar from './UI/NavigationBar';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Home />
    </div>
  );
}

export default App;

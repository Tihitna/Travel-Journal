import './App.css';
import Journal from './Journal';
import travel from './travel';

function App() {
  const travels = travel.map((trav,index) => {
    return(
      <Journal 
      {...trav}
      last={index===travel.length - 1}
      />
    )
  })
  return (
    <div className="App">
      <div className='header'>
          <div className='logo'>
            <img src="./images/world.png"/>
            <p> my travel journal.</p>
          </div>
      </div>
      <div className='main'>
        {travels}
        
      </div>
    </div>
  );
}

export default App;

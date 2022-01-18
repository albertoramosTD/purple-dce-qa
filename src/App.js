import './App.css';

function App() {

  const customText = {
    title: "Talkdesk Chat",
    subTitle: "Purple team"
  } 
  
  return (
    <div className="App">
        <div className="custom-text">
          <h1>{customText.title}</h1>
          <h3>{customText.subTitle}</h3>
        </div>
    </div>
  );
}

export default App;

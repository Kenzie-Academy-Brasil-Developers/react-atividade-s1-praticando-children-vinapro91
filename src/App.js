import "./App.css";
import CenteredCard from "./components/CenteredCard/CenteredCard";
function App() {
  return (
    <div className="App">
      <CenteredCard children={<h1> Children 1 </h1>} />
      <CenteredCard children={<h1> Children 2 </h1>} />
      <CenteredCard children={<h1> Children 3 </h1>} />
    </div>
  );
}

export default App;

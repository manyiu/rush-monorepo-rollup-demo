import "./App.css";
import { TextField } from "@frontend/ui";

function App() {
  return (
    <div className="App">
      <TextField
        id="test-field"
        onChange={() => console.log("clicked")}
        label="test"
        name="test-text"
        error={false}
        value="I am a boy!"
      />
      Real React
    </div>
  );
}

export default App;

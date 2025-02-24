import "./App.css";
import { HelloComponent } from "./component/hello_component";
import { SubscribeButton } from "./component/subscribe_button";
function App() {
  return (
    <div className="App">
      <HelloComponent name='NGP' />
      <SubscribeButton />
    </div>
  );
}

export default App;

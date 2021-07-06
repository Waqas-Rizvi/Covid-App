import { Provider } from 'react-redux'
import store from "./Store/Index";
import './App.css'
import { Covid } from "./Component/Covid";

function App() {
  return (
    <Provider store={store}>
      <Covid/>
    </Provider>
  );
}

export default App;

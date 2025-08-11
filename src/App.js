import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './Utilities/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Body/> 
       {/* i need create a body compo and keep all the netflix components in it  */}
    </Provider>
    
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Home from '../components/Home';
import store from '../redux/store';

export default function Homes() {
 
  return (
    <Provider store={store}>
        <Home />
    </Provider>
    
  )
}

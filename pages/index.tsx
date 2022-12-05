import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Home from '../components/Home';
import store from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Homes() {
 
  return (
    <Provider store={store}>
        <Home />
        <ToastContainer />
    </Provider>
    
  )
}

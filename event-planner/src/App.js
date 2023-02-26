import Routes from './pages/Routes';
import './globle'
import './App.scss';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes />

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    
    </>
  );
}

export default App;

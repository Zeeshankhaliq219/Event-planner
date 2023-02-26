import Routes from './pages/Routes';
import './globle'
import './App.scss';
import { ToastContainer } from "react-toastify";
import AuthcontextProvider from './context/authcontext';

function App() {
  return (
    <>
      <AuthcontextProvider>
      <Routes />
      </AuthcontextProvider>
        

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

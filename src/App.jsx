import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar';

import { ToastContainer } from 'react-toastify'
import Todo from './components/Todo'
function App() {

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Menubar />
      <Todo/>
    </>
  )
}

export default App

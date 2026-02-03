import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar';
import Todo from './components/todo';
import { ToastContainer } from 'react-toastify'
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
      <Todo />
    </>
  )
}

export default App

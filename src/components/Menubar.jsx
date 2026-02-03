import todologo from '../assets/todologo.png';


const Menubar = () => {
  return (
    <div className='text-center p-2 w-100 text-white d-flex gap-2 mt-1'>
     <img src={todologo} alt="logo" width={70} height={70} className='ms-2'/>   
     <h1 className='mt-2'>TODO APPLICATION</h1>
    </div>
  )
}

export default Menubar

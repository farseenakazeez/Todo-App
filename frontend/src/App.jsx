
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { ToastContainer } from 'react-toastify'
import EditPage from './pages/EditPage.jsx'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='edit/:id' element={<EditPage/>}/>


      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       
      />


    </>
  )


}

export default App

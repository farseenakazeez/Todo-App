
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { ToastContainer } from 'react-toastify'
import EditPage from './pages/EditPage.jsx'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
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

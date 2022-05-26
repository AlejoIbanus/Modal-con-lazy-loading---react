
import './App.css'
import {openModal, openModalCuenta}from './components/openModal'

function App() {
  function handleOpenModal(){
    openModal();
  }
  function handleOpenModal2(){
    openModalCuenta();
  }
  return (
   <div className="App">
     <button onClick={handleOpenModal}>Abrir modal</button>
    <button onClick={handleOpenModal2}>Abrir modal de cuenta</button>
   </div>
  
  )
}

export default App

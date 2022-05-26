import React, {Suspense, lazy} from "react";
import {createRoot} from 'react-dom/client'
export  function openModal (){
    const Modal = lazy(() => import('./modalSettings'))
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <Modal root = {root} title='modal de config'>
      
         </Modal>
        </Suspense>
       
         );
}

export  function openModalCuenta (){
    const Modal = lazy(() => import('./modalCuenta'))
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal';
    document.body.appendChild(modalDiv);

    const root = createRoot(modalDiv);
    root.render(
        <Suspense fallback={<div>Loading...</div>}>
            <Modal root = {root} title='modal de cuenta'>
      
         </Modal>
        </Suspense>
       
         );
}
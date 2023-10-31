import React from 'react'

const ModalDetails = ({name, description, img, id}) => {
    return (
        <div>
            <button className="btn btn-xs font-medium mt-3" onClick={()=>document.getElementById(`modal_${id}`).showModal()}>Detalhes</button>
            <dialog id={`modal_${id}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-2">{name}</h3>
                    <img src={img} alt="img" className='rounded-lg'/>
                    <p className="py-4 font-medium">{description}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default ModalDetails
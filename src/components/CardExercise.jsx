import React from 'react'
import ModalDetails from './ModalDetails'
import ModalTimer from './ModalTimer'

const CardExercise = ({name, series, repeat, restTime, description, img, id}) => {
    return (
        <div className='card card-side shadow-xl w-auto mb-5'>
            <figure>
                <img src={img} alt="img" className='object-cover w-32 h-full'/>
            </figure>
            <div className='mx-4 w-full'>
                <h2 className='card-title justify-between'>
                    <div>{name}</div>
                    <ModalDetails name={name} description={description} img={img} id={id}/>
                </h2>
                <div className='flex justify-between p-4'>
                    <div className='flex gap-12'>
                        <div className='btn btn-secondary'>{series} Series</div>
                        <div className='btn btn-outline btn-primary'>{repeat} Repetições</div>
                    </div>
                    <ModalTimer restTime={restTime}/>
                    <div className='flex gap-3 badge badge-lg mt-4'>
                        <div>Descanso: </div>
                        <div>{restTime} min</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardExercise
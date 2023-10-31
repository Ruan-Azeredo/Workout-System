import axios from 'axios'
import React, { useState } from 'react'
import ModalPitaSucess from './ModalPitaSucess'

const InputDificultly = ({name, id, set, values}) => {

    const change = (newValue) => {

        const newArray = []
        console.log('id: ',id)
        console.log('values: ', values)
        values.map(item => {
            if(item.id == id){
                newArray.push({id: id, dificultly: parseInt(newValue)})
            } else{
                newArray.push({id: item.id, dificultly: item.dificultly})
            }
        })

        set(newArray)
        console.log('newArray:', newArray)
    }

    return (
        <div>
            <div className="mb-1">{name}</div>
            <input type="range" min={1} max="4" className="range" step="1" defaultValue={3} onChange={(e) => change(e.target.value)}/>
            <div className="w-full flex justify-between text-xs px-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
        </div>
    )
}

const FeedbackForm = ({exercises, pts, type}) => {

    const [ex, setEx] = useState([
        {id: 0, dificultly: 3},
        {id: 1, dificultly: 3},
        {id: 2, dificultly: 3},
        {id: 3, dificultly: 3},
        {id: 4, dificultly: 3},
        {id: 5, dificultly: 3}
    ])
    console.log(ex)

    const [open, setOpen] = useState(false)
    const [disable, setDisable] = useState(false)

    const submit = () => {

        const data = [
            {
                dia: new Date().toJSON(),
                tipo: type,
                pts: pts + 5,

                id_ex1: exercises[0].id,
                rep_ex1: exercises[0].repeats,
                ser_ex1: exercises[0].series,
                desc_ex1: exercises[0].rest,
                dif_ex1: ex[0].dificultly,

                id_ex2: exercises[1].id,
                rep_ex2: exercises[1].repeats,
                ser_ex2: exercises[1].series,
                desc_ex2: exercises[1].rest,
                dif_ex2: ex[1].dificultly,

                id_ex3: exercises[2].id,
                rep_ex3: exercises[2].repeats,
                ser_ex3: exercises[2].series,
                desc_ex3: exercises[2].rest,
                dif_ex3: ex[2].dificultly,

                id_ex4: exercises[3].id,
                rep_ex4: exercises[3].repeats,
                ser_ex4: exercises[3].series,
                desc_ex4: exercises[3].rest,
                dif_ex4: ex[3].dificultly,

                id_ex5: exercises[4].id,
                rep_ex5: exercises[4].repeats,
                ser_ex5: exercises[4].series,
                desc_ex5: exercises[4].rest,
                dif_ex5: ex[4].dificultly,

                id_ex6: exercises[5].id,
                rep_ex6: exercises[5].repeats,
                ser_ex6: exercises[5].series,
                desc_ex6: exercises[5].rest,
                dif_ex6: ex[5].dificultly,
            }
        ]
        axios.post('https://sheetdb.io/api/v1/bo5hm6fbpujji', {
            data: data
        }).then(resp => {
            console.log(resp)
            setDisable(true)
        }).catch(error => {
            console.error(error)
            setDisable(true)
        })
        console.log(data)

        setOpen(!open)
    }

    return (
        <div>
            <h2 className="mb-4 font-semibold">Formulario de Feedback</h2>
            {exercises?.map(item => (
                <div key={item.name} className='mb-16'>
                    <InputDificultly name={item.name} id={item.id} set={setEx} values={ex}/>
                </div>
            ))}
            <button className="btn bg-primary flex ml-auto" disabled={disable} type="submit" onClick={submit}>Enviar</button>
            <ModalPitaSucess open={open} initialValue={pts}/>
        </div>
    )
}

export default FeedbackForm
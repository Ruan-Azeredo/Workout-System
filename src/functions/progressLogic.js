import { infos } from "../service/exercisesInfos"

    const trasnformDayInArray = (last_day, type) => {
        return {
            day: last_day?.dia,
            type: last_day?.tipo,
            exercises: [
                {
                    id: last_day ? last_day.id_ex1 : 0 + (type * 6),
                    repeats: last_day ? last_day.rep_ex1 : 10,
                    series: last_day ? last_day.ser_ex1 : 3,
                    rest: last_day ? last_day.desc_ex1 : 2,
                    dificult: last_day ? last_day.dif_ex1 : 3
                },
                {
                    id: last_day ? last_day.id_ex2 : 1 + (type * 6),
                    repeats: last_day ? last_day.rep_ex2 : 10,
                    series: last_day ? last_day.ser_ex2 : 3,
                    rest: last_day ? last_day.desc_ex2 : 2,
                    dificult: last_day ? last_day.dif_ex2 : 3
                },
                {
                    id: last_day ? last_day.id_ex3 : 2 + (type * 6),
                    repeats: last_day ? last_day.rep_ex3 : 10,
                    series: last_day ? last_day.ser_ex3 : 3,
                    rest: last_day ? last_day.desc_ex3 : 2,
                    dificult: last_day ? last_day.dif_ex3 : 3
                },
                {
                    id: last_day ? last_day.id_ex4 : 3 + (type * 6),
                    repeats: last_day ? last_day.rep_ex4 : 10,
                    series: last_day ? last_day.ser_ex4 : 3,
                    rest: last_day ? last_day.desc_ex4 : 2,
                    dificult: last_day ? last_day.dif_ex4 : 3
                },
                {
                    id: last_day ? last_day.id_ex5 : 4 + (type * 6),
                    repeats: last_day ? last_day.rep_ex5 : 10,
                    series: last_day ? last_day.ser_ex5 : 3,
                    rest: last_day ? last_day.desc_ex5 : 2,
                    dificult: last_day ? last_day.dif_ex5 : 3
                },
                {
                    id: last_day ? last_day.id_ex6 : 5 + (type * 6),
                    repeats: last_day ? last_day.rep_ex6 : 10,
                    series: last_day ? last_day.ser_ex6 : 3,
                    rest: last_day ? last_day.desc_ex6 : 2,
                    dificult: last_day ? last_day.dif_ex6 : 3
                }
            ]
        }
    }

    const coef = last => {
        const total_repeat = last.repeats * last.series

        var dificult
        last.dificult == 1 ? dificult = 1.5 : dificult = last.dificult

        var total_repeat_today = total_repeat * 3 / dificult

        var rest = last.rest
        if(last.rest > 1 && dificult == 4 && total_repeat_today > 80){
            total_repeat_today = total_repeat_today - 20
            rest = rest - 0.5
        }

        var series
        if(total_repeat_today < 60){
            series = 3
        } else if(total_repeat < 80){
            series = 4
        } else{
            series = 5
        }
        const repeats = total_repeat_today / series

        return {
            id: infos[last.id]?.id,
            name: infos[last.id]?.name,
            description: infos[last.id]?.description,
            img: infos[last.id]?.img,
            series: series, 
            repeats: parseInt(repeats), 
            rest: rest
        }
    }

    const treatedExercises = (db) => {
        console.log('sheet: ', db)
        const type_0 = db?.filter(item => item.tipo == 0)
        const type_1 = db?.filter(item => item.tipo == 1)
        const type_2 = db?.filter(item => item.tipo == 2)

        const day0_exercises = []
        const day1_exercises = []
        const day2_exercises = []
        trasnformDayInArray(type_0?.[type_0?.length -1], 0).exercises.map(item => {
            day0_exercises.push(coef(item))
        })
        trasnformDayInArray(type_1?.[type_1?.length -1], 1).exercises.map(item => {
            day1_exercises.push(coef(item))
        })
        trasnformDayInArray(type_2?.[type_2?.length -1], 2).exercises.map(item => {
            day2_exercises.push(coef(item))
        })
        return [day0_exercises, day1_exercises, day2_exercises]
    }


export default treatedExercises
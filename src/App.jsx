import { useEffect, useState } from "react";
import CardExercise from "./components/CardExercise";
import treatedExercises from "./functions/progressLogic";
import FeedbackForm from "./components/FeedbackForm";
import Avatar from "./components/Avatar";
import axios from "axios";
import { infos } from "./service/exercisesInfos";
import { db } from "./service/fakeDB";


function App() {
  const [data, setData] = useState([])
  const [type, setType] = useState()

  const [exe, setExe] = useState()
  
  const defineType = (n) => {
    setExe(treatedExercises(data, infos)[n])
    setType(n)
  }

  const getExercises = async () => {
    // ------------- prod
    await axios.get('https://sheetdb.io/api/v1/bo5hm6fbpujji')
    .then(resp => setData(resp.data))

    // ------------- dev
/*     setData(db) */

    defineType(0)
  }

  return (
    <div className="App h-screen">
      <div className="border-b-2 p-8 flex justify-between">
        <div className="text-2xl text-secondary flex">Mary Workout</div>
        <div className="flex gap-10">
          <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li><a onClick={() => defineType(0)}>Perna</a></li>
            <li><a onClick={() => defineType(1)}>Abdomen</a></li>
            <li><a onClick={() => defineType(2)}>Braço</a></li>
          </ul>
          <div className="w-14 h-14 p-1 bg-warning rounded-full">
            <img src="/mary.jpeg" alt="" className="rounded-full w-12 h-12 object-cover"/>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-screen p-4 flex gap-4">
          <div className="w-full">
            <div className="my-3 mx-2 text-xl">Exercicios</div>
            {exe ? 
              exe?.map((item, key) => (
                <CardExercise key={key} name={item.name} series={item.series} repeat={item.repeats} restTime={item.rest} description={item.description} img={item.img} id={item.id}
                />
              ))
            : (
              <div className="w-full flex">
                <button className="btn btn-secondary mx-auto mt-10" onClick={getExercises}>Carregar meus Exercicios</button>
              </div>
            )}
          </div>
          <div className="border-2 border-secondary rounded-lg p-5 w-80">
            <FeedbackForm exercises={exe} pts={data?.pts ? data.pts : 0} type={type}/>
          </div>
        </div>
      </div>
      <div className="fixed bottom-9 right-40">
        <Avatar/>
      </div>
    </div>
  );
}

export default App;

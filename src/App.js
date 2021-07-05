import Header from "./components/Header";
import React, { useState } from 'react'
import  Tasks from './components/tasks'


function App() {
  const [tasks, setTasks] = useState( [
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 6th at 2:30pm',
      reminder: true,

    },
    {
      id:2,
      text: 'Meeting at school',
      day: 'Feb 5th at 2:30pm',
      reminder: true,

    },
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb %th at 2:30pm',
      reminder: true,

    },
  ])

  const deleteTask = (id) => {
    console.log('delete',id);
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
// class App extends React.Component{
//   render(){
//     return<h1>Hello from a class</h1>
//   }
// }

export default App;

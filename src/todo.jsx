// export default function Todo ({task}){
//     return (
//         <p>task : {task}</p>
//     )

// }

// export default function Todo ({task, isDone}){
//     if(isDone === true){
//         return <li>finished : {task}</li>
//      }
//      else {
//         return <li>work: {task}</li>
//      }
// }


export default function Todo({task ,isDone}){
    if(isDone){
        return <li>finished : {task}</li>
    }
    return <li>work: {task}</li>
}
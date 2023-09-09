export default function Singer ({singer}){

    return (
        <div className="singer">
        
            <p>name : {singer.name}</p>
            <p>age : {singer.age}</p>
        </div>
    )
}
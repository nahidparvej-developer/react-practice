
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newNumber = count + 1;
        setCount(newNumber)
    }
    const handleReduice = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className='counter'>
            <h3>counter : {count}</h3>
            <div>
                <button className='count' onClick={handleAdd}>countadd</button>
                <button onClick={handleReduice}>reduice</button>
            </div>
        </div>
    )
}
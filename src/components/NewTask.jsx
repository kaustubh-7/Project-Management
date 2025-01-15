import {useState} from 'react';

export default function NewTask({onAdd}){
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(evt){
        setEnteredTask(evt.target.value);
    }
    function handleClick(){
        if (enteredTask === ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input type='text' 
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange}
            value={enteredTask} /> {/*Two-way binding in React refers to a pattern where a component's state is bound to a form input element(like a text box or checkbox) 
                                   and updates to the state are automatically reflected in the input value, while changes in the input value also update the state. */}
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    );
}
import * as React from 'react';

export type Task = {
    text: string;
    checked: boolean;
};

interface TodoListsProps {
    tasks: Task[];
    handleRemoveTask: (index: number) => void;
}

const TodoLists: React.FC<TodoListsProps> = ({ handleRemoveTask, tasks }) => (
    <>
        <ul className="Todo-list">
            {tasks.map((task, index) => (
                <li key={index} className="Todo-list_item">
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked={task.checked}
                            aria-checked={task.checked}
                        />
                        <p className="Text">{task.text}</p>
                    </label>
                    <button onClick={() => handleRemoveTask(index)}>
                        削除
                    </button>
                </li>
            ))}
        </ul>

        <style jsx>{`
            .Todo-list_item label {
                display: inline-flex;
                align-items: center;
            }
            .Todo-list_item .Text:hover {
                cursor: pointer;
            }
        `}</style>
    </>
);

export default TodoLists;

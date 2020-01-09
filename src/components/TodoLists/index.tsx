import * as React from 'react';

export type Task = {
    text: string;
    checked: boolean;
};

interface TodoListsProps {
    tasks: Task[];
    handleEditTask: (index: number, task: Task) => void;
    handleRemoveTask: (index: number) => void;
}

const TodoLists: React.FC<TodoListsProps> = ({
    handleEditTask,
    handleRemoveTask,
    tasks
}) => {
    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // INFO: ENTER Key
        if (e.keyCode !== 13) return;

        e.currentTarget.blur();
    };

    return (
        <>
            <ul className="Todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="Todo-list_item">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={task.checked}
                                aria-checked={task.checked}
                                onChange={e => {
                                    handleEditTask(index, {
                                        text: task.text,
                                        checked: e.target.checked
                                    });
                                }}
                            />
                            <input
                                className="Text"
                                type="text"
                                defaultValue={task.text}
                                onKeyDown={e => handleOnKeyDown(e)}
                                onBlur={e =>
                                    handleEditTask(index, {
                                        text: e.target.value,
                                        checked: task.checked
                                    })
                                }
                            />
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
                .Todo-list_item .Text {
                    margin: 1em;
                }
                .Todo-list_item .Text:hover {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default TodoLists;

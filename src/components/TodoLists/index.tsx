import React, { KeyboardEvent } from 'react';

export type Task = {
    text: string;
    checked: boolean;
};

export type TodoListsProps = {
    tasks: Task[];
    editTask: (index: number, task: Task) => void;
    removeTask: (index: number) => void;
    isEditable: boolean;
};

const TodoLists: React.FC<TodoListsProps> = ({
    editTask,
    removeTask,
    tasks,
    isEditable
}) => {
    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
                                    editTask(index, {
                                        text: task.text,
                                        checked: e.target.checked
                                    });
                                }}
                            />
                            <input
                                className="Text"
                                type="text"
                                defaultValue={task.text}
                                onKeyDown={handleOnKeyDown}
                                onBlur={e =>
                                    editTask(index, {
                                        text: e.target.value,
                                        checked: task.checked
                                    })
                                }
                                readOnly={!isEditable}
                            />
                        </label>
                        {isEditable && (
                            <button
                                className="Button"
                                onClick={() => removeTask(index)}
                            >
                                削除
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .Todo-list_item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .Todo-list_item label {
                    display: flex;
                    align-items: center;
                    flex: 1 1 0;
                }
                .Todo-list_item [aria-checked='true'] + .Text {
                    text-decoration: line-through;
                }
                .Todo-list_item .Text {
                    font-size: 14px;
                    margin: 0.5em;
                    padding: 1em;
                    flex-grow: 1;
                }
                .Todo-list_item [readonly].Text {
                    border: 0;
                    outline: 0;
                    padding: calc(1em + 2px); // Border分の余白を調整
                    cursor: default;
                }
                .Todo-list_item .Text:hover {
                    cursor: pointer;
                }
                .Todo-list_item .Button {
                    font-size: 12px;
                    padding: 0.5em 1em;
                    border: 0;
                    border-radius: 4px;
                    background: #ccc;
                }
            `}</style>
        </>
    );
};

export default TodoLists;

import React, { useState } from 'react';

type Task = {
    text: string;
    checked: boolean;
};

const initialState: Task[] = [
    {
        text: '豚肉を買う',
        checked: true
    },
    {
        text: '定期券を買う',
        checked: true
    },
    {
        text: '本を買う',
        checked: false
    },
    {
        text: '家の周りをランニングする',
        checked: false
    }
];

const Todo: React.FC = () => {
    const [tasks, setTasks] = useState(initialState); // タスク一覧
    const [text, inputText] = useState(''); // 入力フォームの一時保管用

    const addTask = (text?: string) => {
        if (!text) return;

        const task: Task = { text, checked: false };
        setTasks([...tasks, task]);
        inputText('');
    };

    return (
        <>
            <main>
                <h1>今日のやること</h1>
                <ul className="Tasks-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="Tasks-list_item">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked={task.checked}
                                    aria-checked={task.checked}
                                />
                                <p className="Text">{task.text}</p>
                            </label>
                        </li>
                    ))}
                </ul>
                <form className="Form">
                    <input
                        type="text"
                        className="Input-text"
                        value={text}
                        placeholder="タスクを追加しよう!!"
                        onChange={e => inputText(e.target.value)}
                    />
                    <button
                        type="button"
                        className="Button"
                        onClick={() => addTask(text)}
                    >
                        タスクを追加
                    </button>
                </form>
            </main>

            <style jsx>{`
                main {
                    width: 80%;
                    margin: 0 auto;
                }
                .Tasks-list_item label {
                    display: inline-flex;
                    align-items: center;
                }
                .Tasks-list_item .Text:hover {
                    cursor: pointer;
                }
                .Form {
                    height: 48px;
                    margin-top: 0.5em;
                    padding-top: 1.5em;
                    border-top: solid 1px #ccc;
                    display: flex;
                    align-items: stretch;
                }
                .Input-text {
                    font-size: 16px;
                    flex: 1 1 0;
                    padding: 0 12px;
                    margin-right: 12px;
                }
                .Button {
                    appearance: none;
                    -webkit-appearance: none;
                    border: none;
                    background: #fbd246;
                    outline-color: #ffa400;
                }
                .Button:hover {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
};

export default Todo;

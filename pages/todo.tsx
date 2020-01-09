import React, { useState } from 'react';
import TodoLists, { Task } from '~/components/TodoLists';

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
    const [text, setText] = useState(''); // 入力フォームの一時保管用

    const addTask = (text?: string) => {
        if (!text) return;

        const task: Task = { text, checked: false };
        setTasks([...tasks, task]);
        setText('');
    };

    return (
        <>
            <main>
                <h1>今日のやること</h1>
                {tasks.length > 0 && <TodoLists tasks={tasks} />}

                <form className="Form">
                    <input
                        type="text"
                        className="Input-text"
                        value={text}
                        placeholder="タスクを追加しよう!!"
                        onChange={e => setText(e.target.value)}
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
                    max-width: 600px;
                    margin: 0 auto;
                    padding-top: 20px;
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
                    border: solid 1px #ccc;
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
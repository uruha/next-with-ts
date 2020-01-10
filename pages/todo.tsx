import React, { useState } from 'react';
import TodoLists, { Task } from '~/components/TodoLists';
import userTodoList from '~/hooks/todo/useTodoList';

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
    const [text, setText] = useState(''); // 入力フォームの一時保管用

    // タスク一覧
    const {
        tasks,
        handleAddTask,
        handleEditTask,
        handleRemoveTask
    } = userTodoList(initialState);

    return (
        <>
            <main>
                <h1>今日のやること</h1>
                {tasks.length > 0 && (
                    <TodoLists
                        tasks={tasks}
                        handleEditTask={handleEditTask}
                        handleRemoveTask={handleRemoveTask}
                    />
                )}

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
                        onClick={() => handleAddTask(text)}
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
                    border-radius: 4px;
                }
                .Button {
                    appearance: none;
                    -webkit-appearance: none;
                    border-radius: 4px;
                    border: 0;
                    padding: 0.5em 1em;
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

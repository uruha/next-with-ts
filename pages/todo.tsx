import React, { FormEvent, KeyboardEvent, useState } from 'react';
import TodoLists, { Task } from '~/components/TodoLists';
import { useTodo, useTodoList } from '~/hooks/todo';

const initialTasksState: Task[] = [];

const Todo: React.FC = () => {
    // 入力フォームの一時保管用
    const todo = useTodo('');

    // タスク一覧
    const tasks = useTodoList(initialTasksState);

    // 編集モードかどうかのフラグ
    const [isEditable, setEditable] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        // INFO: ENTER Key
        if (e.keyCode !== 13) return;

        tasks.add(todo.value);
        todo.reset();
    };

    const hasTaskList = tasks.list.length > 0;

    return (
        <>
            <main>
                <div className="Top">
                    <h1>今日のやること</h1>
                    {hasTaskList && (
                        <button
                            className="Top-button"
                            onClick={() => setEditable(!isEditable)}
                        >
                            {isEditable ? '保存' : '編集'}
                        </button>
                    )}
                </div>
                {hasTaskList ? (
                    <TodoLists
                        tasks={tasks.list}
                        editTask={tasks.edit}
                        removeTask={tasks.remove}
                        isEditable={isEditable}
                    />
                ) : (
                    <p className="Text">タスクはありません！</p>
                )}

                <form className="Form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="Input-text"
                        value={todo.value}
                        placeholder="タスクを追加しよう!!"
                        onChange={todo.change}
                        onKeyDown={handleOnKeyDown}
                    />
                    <button
                        type="button"
                        className="Button"
                        onClick={() => {
                            tasks.add(todo.value);
                            todo.reset();
                        }}
                    >
                        タスクを追加
                    </button>
                </form>
            </main>

            <style jsx>{`
                .Top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .Top-button {
                    font-size: 12px;
                    appearance: none;
                    padding: 0.5em 1em;
                    border: 0;
                    border-radius: 4px;
                    background: #ccc;
                }
                main {
                    width: 80%;
                    max-width: 600px;
                    margin: 0 auto;
                    padding-top: 20px;
                }
                .Text {
                    padding: 1em 0;
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

import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useTodoList } from '~/hooks/todo';

describe('useTodoList', () => {
    const initialTodoListValue = [
        {
            text: 'test1',
            checked: true
        },
        {
            text: 'test2',
            checked: false
        }
    ];
    afterEach(cleanup);

    it('should set initial value unless argument ', () => {
        const { result } = renderHook(() => useTodoList());

        expect(result.current.list).toEqual([]);
    });

    it('should be argument value if the argument is specified', () => {
        const { result } = renderHook(() => useTodoList(initialTodoListValue));

        expect(result.current.list).toEqual(initialTodoListValue);
    });

    it('should not add in list, if argument is falsy value', () => {
        const { result } = renderHook(() => useTodoList(initialTodoListValue));
        const task = '';

        act(() => result.current.add(task));

        expect(result.current.list).toEqual(initialTodoListValue);
        expect(result.current.list.length).toBe(2);
    });

    it('should be added in lists, after add method is fired', () => {
        const { result } = renderHook(() => useTodoList(initialTodoListValue));
        const newTask = {
            text: 'test3',
            checked: false
        };

        expect(result.current.list.length).toBe(2);

        act(() => result.current.add(newTask.text));

        const expected = [...initialTodoListValue, newTask];

        expect(result.current.list).toEqual(expected);
        expect(result.current.list.length).toBe(3);
    });

    it('should be edited, after edit method is fired', () => {
        const { result } = renderHook(() => useTodoList(initialTodoListValue));
        const targetIndex = 0;
        const newTask = {
            text: 'test3',
            checked: false
        };

        act(() => result.current.edit(targetIndex, newTask));

        expect(result.current.list[targetIndex]).toEqual(newTask);
        expect(result.current.list.length).toBe(2);
    });

    it('should be removed, after remove method is fired', () => {
        const { result } = renderHook(() => useTodoList(initialTodoListValue));
        const targetIndex = 0;

        act(() => result.current.remove(targetIndex));

        const expected = initialTodoListValue.filter(
            (_, index) => index !== targetIndex
        );

        expect(result.current.list).toEqual(expected);
        expect(result.current.list.length).toBe(1);
    });
});

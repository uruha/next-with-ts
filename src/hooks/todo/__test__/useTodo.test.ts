import { ChangeEvent } from 'react';
import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useTodo } from '~/hooks/todo';

describe('useTodo', () => {
    afterEach(cleanup);

    it('should set initial value unless argument ', () => {
        const { result } = renderHook(() => useTodo());

        expect(result.current.value).toBe('');
    });

    it('should be argument value if the argument is specified', () => {
        const { result } = renderHook(() => useTodo('initial value'));

        expect(result.current.value).toBe('initial value');
    });

    it('should update value, after onChange event fired', () => {
        const { result } = renderHook(() => useTodo(''));
        const event = {
            target: {
                value: 'test'
            }
        } as ChangeEvent<HTMLInputElement>;

        act(() => result.current.change(event));

        expect(result.current.value).toBe('test');
    });

    it('should be empty value, after reset method is fired', () => {
        const { result } = renderHook(() => useTodo('test'));

        act(() => result.current.reset());

        expect(result.current.value).toBe('');
    });
});

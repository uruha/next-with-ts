import { renderHook, act } from '@testing-library/react-hooks';
import useEmail from '~/hooks/signin/useEmail';

describe('useEmail', () => {
    it('should use email', () => {
        const { result } = renderHook(() => useEmail(''));

        expect(result.current.entertedValue).toBe('');
    });

    it('should update email string', () => {
        const { result } = renderHook(() => useEmail(''));

        act(() => result.current.setInputValue('email'));

        expect(result.current.entertedValue).toBe('email');
    });

    it('after onChange event fired, should set email string', () => {
        const { result } = renderHook(() => useEmail(''));
        const pseudoEvent = {
            target: {
                value: 'test'
            }
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => result.current.changedValue(pseudoEvent));

        expect(result.current.entertedValue).toBe('test');
    });
});

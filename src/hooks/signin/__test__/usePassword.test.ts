import { renderHook, act } from '@testing-library/react-hooks';
import usePassword from '~/hooks/signin/usePassword';

describe('useEmail', () => {
    it('should use password', () => {
        const { result } = renderHook(() => usePassword(''));

        expect(result.current.entertedValue).toBe('');
    });

    it('should update password string', () => {
        const { result } = renderHook(() => usePassword(''));

        act(() => result.current.setInputValue('password'));

        expect(result.current.entertedValue).toBe('password');
    });

    it('after onChange event fired, should set password string', () => {
        const { result } = renderHook(() => usePassword(''));
        const pseudoEvent = {
            target: {
                value: '1234qwer'
            }
        } as React.ChangeEvent<HTMLInputElement>;

        act(() => result.current.changedValue(pseudoEvent));

        expect(result.current.entertedValue).toBe('1234qwer');
    });
});

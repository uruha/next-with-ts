import * as React from 'react';
import http from '~/lib/http';

const Signout: React.FC = () => {
    const handleSignout = async () => {
        try {
            const res = await http.post('/api/signout');

            if (res.status === 204) {
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button type="button" onClick={handleSignout}>
            signout
        </button>
    );
};

export default Signout;

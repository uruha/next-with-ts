import * as React from 'react';
import fetch from 'isomorphic-unfetch';

const Signout: React.FC = () => {
    const handleSignout = async () => {
        try {
            const res = await fetch('/api/signout', {
                method: 'POST'
            });

            if (res.status === 204) {
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button type="button" onClick={() => handleSignout()}>
            signout
        </button>
    );
};

export default Signout;

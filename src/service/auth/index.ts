import { AccessToken, RefreshToken } from '~/modelTypes';
import jwtDecode from 'jwt-decode';

type DecodedToken = {
    readonly exp: number;
};

export default class Auth {
    readonly decodedToken: DecodedToken;
    constructor(readonly token?: AccessToken | RefreshToken) {
        this.decodedToken = { exp: 0 };

        try {
            if (token) this.decodedToken = jwtDecode(token);
        } catch (e) {}
    }

    get expiresAt(): Date {
        return new Date(this.decodedToken.exp * 1000);
    }

    /**
     * @CAUTION
     * Max-Age needs number is seconds, not milliseconds
     */
    get maxAgeAt(): number {
        return this.decodedToken.exp - Date.parse(new Date().toString()) / 1000;
    }

    get isExpired(): boolean {
        return new Date() > this.expiresAt;
    }

    get isAuthenticated(): boolean {
        return !this.isExpired;
    }

    get authorizationString() {
        return `Bearer ${this.token}`;
    }
}

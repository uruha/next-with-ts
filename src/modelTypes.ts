/**
 * Email
 *
 * @example "xxxx\u0040example.com"
 */
export type Email = string;

/**
 * Nickname
 *
 * @example "sid_jankovic_jeronimo_mongo"
 */
export type Nickname = string;

/**
 * Password
 */
export type Password = string;

/**
 * Access token (JWT)
 *
 * @example "eyJz93a...k4laUWw"
 */
export type AccessToken = string;

/**
 * Refresh token (JWT)
 *
 * @example "GEbRxBN...edjnXbL"
 */
export type RefreshToken = string;

/**
 * Account
 */
export interface Account {
    /**
     * Email
     */
    email: Email;

    /**
     * Nickname
     */
    nickname: Nickname;
}

export interface UpdateAccount extends Account {
    /**
     * Password as plain text
     */
    password?: Password;
}

export interface Token {
    /**
     * Access token (JWT)
     */
    access_token: AccessToken;

    /**
     * Refresh token (JWT)
     */
    refresh_token: RefreshToken;

    /**
     * Always 'Bearer'
     *
     * @example "Bearer"
     */
    type: string;
}

export interface RefreshTokenRequest {
    /**
     * Refresh token (JWT)
     */
    refresh_token: RefreshToken;
}

export interface SignupRequest extends Account {
    /**
     * Password as plain text
     */
    password: Password;
}

export interface SigninRequest {
    /**
     * Email
     */
    email: Email;

    /**
     * Password as plain text
     */
    password: Password;
}

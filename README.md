# Next.js with Typescript
[Next.js](https://nextjs.org/) simple boiler plate.

## Motivation
### 1. Practical
Most of Web FrontEnd App need a web server.  
This project deferred node.js (Koa.js) web server is prepared.

### 2. Simple
As mush as possible simple archtecture.  
It is clear what you are doing by looking at the code.

#### Flux
No business logic is brought into Action and Reducer.  
Business logic concentrates on Saga tasks.

##### Action
- Naming "actually happend"
    - As a result, REST-like naming
- No operation payload
- Action has two opreration
    1. Start any redux-saga task
    2. Deliver `Action` type and payload to reducer

##### Reducer
- Only do the work of updating which state for each `Action`
- No operation payload

##### Middleware (Redux-saga)
- Always start a task with an `Action`
- End the task with `Action`, or let the `routing process` finish the task
- Asynchronous processing uses the call API
- Can operation payload (※ keep the following promise)
    1. It is possible to take a value from `State` (using select API)
    2. It is also possible to manipulate the value retrieved from `State` in the task
    3. However, state must be updated via `Action => Reducer` (does not update `State` directly with the manipulated value)

### 3.Type annotation
- Use typescript

## Spec
- Application
    - Next.js
- Flux
    - Redux
    - Middleware
        - Redux-saga
- Web server
    - Koa.js
- Linter
    - Eslint
- Code format
    - Prettier
- Pre commit
    - Husky
    - Lint-staged
- Language
    - Typescript
- Logging
    - Bunyan
        - Web server logger
- Unit test
    - Jest
        - Enzyme
            - Component testing
        - [Snapshot-diff](https://github.com/jest-community/snapshot-diff)
            - Reducer testing
        - [Redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)
            - Saga task testing

## How to use
### Quick development start
```
1. npm i install
2. docker-compose up

> http:://localhost(:80)
```

This project use nginx for reverse proxy and static resource cache control.

```
   localhost:80      localhost:3000
    -----------     ----------------
--> |  nginx  | --> |     app      |
    | [proxy] |     | [next + koa] |
    -----------     ----------------
```

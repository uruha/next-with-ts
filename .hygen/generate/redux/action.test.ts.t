---
to: src/actions/<%= name %>/__test__/<%= name %>.test.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME = h.changeCase.upper(name);
    Actions = name + 'Actions';
    State = Name + 'State';
-%>
/* eslint-env jest */
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= Actions %> } from '~/actions';
import { <%= State %> } from '~/stateTypes';

describe('<%= Name %> actions', () => {
    it('should create get <%= name %> action', () => {
        const expectedAction = {
            type: GET_<%= NAME %>
        };

        expect(<%= Actions %>.get<%= Name %>()).toEqual(expectedAction);
    });

    it('should create update <%= name %> action', () => {
        const expectedPayload: <%= State %> = {
            value: 'hoge'
        };
        const expectedAction = {
            type: UPDATE_<%= NAME %>,
            payload: {
                value: expectedPayload.value
            }
        };

        expect(<%= Actions %>.update<%= Name %>(expectedPayload)).toEqual(
            expectedAction
        );
    });
});

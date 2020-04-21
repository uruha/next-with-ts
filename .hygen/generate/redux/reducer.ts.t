---
to: src/reducers/<%= name %>/index.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME = h.changeCase.upper(name);
    ActionTypes = Name + 'ActionTypes';
    State = Name + 'State';
-%>
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= ActionTypes %> } from '~/actionTypes';
import { <%= State  %> } from '~/stateTypes';

export const initial<%= Name %>: <%= State  %> = {
    value: ''
};

export const <%= name %> = (
    state = initial<%= Name %>,
    action: <%= ActionTypes %>
): <%= State  %> => {
    switch (action.type) {
        case GET_<%= NAME %>:
            return state;

        case UPDATE_<%= NAME %>:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

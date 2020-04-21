---
to: src/reducers/<%= name %>/index.ts
---
<%
    REDUCER = h.changeCase.upper(name);
    Name = h.changeCase.pascal(name);
    ActionType = Name + 'ActionTypes';
    State = Name + 'State';
-%>
import { GET_<%= REDUCER %>, UPDATE_<%= REDUCER %> } from '~/constant';
import { <%= ActionType %> } from '~/actionTypes';
import { <%= State  %> } from '~/stateTypes';

export const initial<%= Name %>: <%= State  %> = {
    value: ''
};

export const <%= name %> = (
    state = initial<%= Name %>,
    action: <%= ActionType %>
): <%= State  %> => {
    switch (action.type) {
        case GET_<%= REDUCER %>:
            return state;

        case UPDATE_<%= REDUCER %>:
            return { ...state, ...action.payload };

        default:
            return state;
    }
};

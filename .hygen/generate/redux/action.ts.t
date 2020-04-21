---
to: src/actions/<%= name %>/index.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME =  h.changeCase.upper(name);
    ActionType = Name + 'ActionTypes';
    State = Name + 'State';
-%>
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= ActionType %> } from '~/actionTypes';
import { <%= State %> } from '~/stateTypes';

export const get<%= Name %> = (): <%= ActionType %> => ({
    type: GET_<%= NAME %>
});

export const update<%= Name %> = (payload: <%= State %>): <%= ActionType %> => ({
    type: UPDATE_<%= NAME %>,
    payload,
});

---
to: src/actions/<%= name %>/index.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME = h.changeCase.upper(name);
    ActionTypes = Name + 'ActionTypes';
    State = Name + 'State';
-%>
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= ActionTypes %> } from '~/actionTypes';
import { <%= State %> } from '~/stateTypes';

export const get<%= Name %> = (): <%= ActionTypes %> => ({
    type: GET_<%= NAME %>
});

export const update<%= Name %> = (payload: <%= State %>): <%= ActionTypes %> => ({
    type: UPDATE_<%= NAME %>,
    payload,
});

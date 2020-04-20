---
to: src/actions/<%= name %>/index.ts
---
<%
    GET_ACTION = 'GET_' + h.changeCase.upper(name);
    UPDATE_ACTION = 'UPDATE_' + h.changeCase.upper(name);
    ActionName = h.changeCase.pascal(name);
    ActionType = ActionName + 'ActionTypes';
    State = ActionName + 'State';
-%>
import { <%= GET_ACTION %>, <%= UPDATE_ACTION %> } from '~/constant';
import { <%= ActionType %> } from '~/actionTypes';
import { <%= State %> } from '~/stateTypes';

export const get<%= ActionName %> = (): <%= ActionType %> => ({
    type: <%= GET_ACTION %>
});

export const update<%= ActionName %> = (payload: <%= State %>): <%= ActionType %> => ({
    type: <%= UPDATE_ACTION %>,
    payload,
});

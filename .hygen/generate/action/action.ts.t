---
to: src/actions/<%= actionName %>/index.ts
---
<%
    GET_ACTION = 'GET_' + h.changeCase.upper(actionName);
    ActionName = h.changeCase.pascal(actionName);
    ActionType = ActionName + 'ActionTypes';
-%>
import { <%= GET_ACTION %> } from '~/constant';
import { <%= ActionType %> } from '~/actionTypes';

export const get<%= ActionName %> = (): <%= ActionType %> => ({
    type: <%= GET_ACTION %>
});
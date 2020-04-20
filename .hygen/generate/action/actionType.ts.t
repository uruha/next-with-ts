---
to: src/actionTypes/<%= actionName %>.ts
---
<%
    ActionName = h.changeCase.pascal(actionName);
    ActionTypes = ActionName + 'ActionTypes';
    GET_ACTION = 'GET_' + h.changeCase.upper(actionName);
    GetActionType = 'Get' + ActionName + 'Action';
-%>
import { <%= GET_ACTION %> } from '~/constant';

interface <%= GetActionType %> {
    type: typeof <%= GET_ACTION %>;
}

export type <%= ActionTypes %> = <%= GetActionType %>;

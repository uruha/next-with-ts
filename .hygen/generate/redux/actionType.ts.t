---
to: "<%= type === 'action' ? `src/actionTypes/${name}.ts` : null  %>"
# to: src/actionTypes/<%= name %>.ts
---
<%
    ActionName = h.changeCase.pascal(name);
    ActionTypes = ActionName + 'ActionTypes';
    GET_ACTION = 'GET_' + h.changeCase.upper(name);
    GetActionType = 'Get' + ActionName + 'Action';
-%>
import { <%= GET_ACTION %> } from '~/constant';

interface <%= GetActionType %> {
    type: typeof <%= GET_ACTION %>;
}

export type <%= ActionTypes %> = <%= GetActionType %>;

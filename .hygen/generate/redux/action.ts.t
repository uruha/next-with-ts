---
to: "<%= type === 'action' ? `src/actions/${name}/index.ts` : null  %>"
---
<%
    GET_ACTION = 'GET_' + h.changeCase.upper(name);
    ActionName = h.changeCase.pascal(name);
    ActionType = ActionName + 'ActionTypes';
-%>
import { <%= GET_ACTION %> } from '~/constant';
import { <%= ActionType %> } from '~/actionTypes';

export const get<%= ActionName %> = (): <%= ActionType %> => ({
    type: <%= GET_ACTION %>
});
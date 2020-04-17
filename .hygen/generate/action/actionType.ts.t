---
to: src/actionTypes/<%= actionName %>.ts
---
import { GET_<%= h.changeCase.upper(actionName) %> } from '~/constant';
<% GetActionType = 'Get' + h.changeCase.pascal(actionName) + 'Action' %>
interface <%= GetActionType %> {
    type: typeof GET_<%= h.changeCase.upper(actionName) %>;
}

export type <%= h.changeCase.pascal(actionName) %>ActionTypes = <%= GetActionType %>;

---
to: src/actionTypes/<%= name %>.ts
---
<%
    ActionName = h.changeCase.pascal(name);
    ActionTypes = ActionName + 'ActionTypes';
    ACTION =  h.changeCase.upper(name);
    ActionType = ActionName + 'Action';
-%>
import { GET_<%= ACTION %>, UPDATE_<%= ACTION %> } from '~/constant';
import { <%= Name %>State } from '~/stateTypes';

interface Get<%= ActionType %> {
    type: typeof GET_<%= ACTION %>;
}

interface Update<%= ActionType %> {
    type: typeof UPDATE_<%= ACTION %>;
    payload: <%= Name %>State;
}

export type <%= ActionTypes %> = Get<%= ActionType %> | Update<%= ActionType %>;

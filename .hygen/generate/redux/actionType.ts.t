---
to: src/actionTypes/<%= name %>.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME =  h.changeCase.upper(name);
    ActionTypes = Name + 'ActionTypes';
    ActionType = Name + 'Action';
-%>
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= Name %>State } from '~/stateTypes';

interface Get<%= ActionType %> {
    type: typeof GET_<%= NAME %>;
}

interface Update<%= ActionType %> {
    type: typeof UPDATE_<%= NAME %>;
    payload: <%= Name %>State;
}

export type <%= ActionTypes %> = Get<%= ActionType %> | Update<%= ActionType %>;

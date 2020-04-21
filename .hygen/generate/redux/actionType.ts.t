---
to: src/actionTypes/<%= name %>.ts
---
<%
    Name = h.changeCase.pascal(name);
    NAME = h.changeCase.upper(name);
    ActionTypes = Name + 'ActionTypes';
    Action = Name + 'Action';
-%>
import { GET_<%= NAME %>, UPDATE_<%= NAME %> } from '~/constant';
import { <%= Name %>State } from '~/stateTypes';

interface Get<%= Action %> {
    type: typeof GET_<%= NAME %>;
}

interface Update<%= Action %> {
    type: typeof UPDATE_<%= NAME %>;
    payload: <%= Name %>State;
}

export type <%= ActionTypes %> = Get<%= Action %> | Update<%= Action %>;

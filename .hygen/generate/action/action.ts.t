---
to: src/actions/<%= actionName %>/index.ts
---
import { GET_<%= h.changeCase.upper(actionName) %> } from '~/constant';
import { <%= h.changeCase.pascal(actionName) %>ActionTypes } from '~/actionTypes';

export const get<%=  h.changeCase.pascal(actionName) %> = (): <%= h.changeCase.pascal(actionName) %>ActionTypes => ({
    type: GET_<%= h.changeCase.upper(actionName) %>
});
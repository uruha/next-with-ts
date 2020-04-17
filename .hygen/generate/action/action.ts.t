---
to: src/actions/<%= actionName %>/index.tsx
---
<% ActionName = h.changeCase.pascal(actionName) %>
import { GET_<%= h.changeCase.upper(actionName) %> } from '~/constant';
import { <%= ActionName %>ActionTypes } from '~/actionTypes';
import { <%= ActionName %> } from '~/modelTypes';

export const get<%= ActionName %> = (): <%= ActionName %>Types => ({
    type: GET_<%= h.changeCase.upper(actionName) %>
});


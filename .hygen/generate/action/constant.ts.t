---
to: src/constant.ts
inject: true
append: true
skip_if: <%= h.changeCase.upper(actionName) %>
---
export const GET_<%= h.changeCase.upper(actionName) %> = 'GET_<%= h.changeCase.upper(actionName) %>';

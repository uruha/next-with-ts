---
to: src/constant.ts
inject: true
append: true
skip_if: <%= h.changeCase.upper(actionName) %>
---
<% GetActionName = 'GET_' + h.changeCase.upper(actionName) %>
export const <%= GetActionName %> = '<%= GetActionName %>';
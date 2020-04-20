---
to: src/constant.ts
inject: true
append: true
skip_if: <%= h.changeCase.upper(actionName) %>
---
<% GET_ACTION = 'GET_' + h.changeCase.upper(actionName) -%>

export const <%= GET_ACTION %> = '<%= GET_ACTION %>';
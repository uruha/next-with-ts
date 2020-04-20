---
to: "<%= type === 'action' ? 'src/constant.ts' : null  %>"
inject: true
append: true
skip_if: <%= h.changeCase.upper(name) %>
---
<% GET_ACTION = 'GET_' + h.changeCase.upper(name) -%>

export const <%= GET_ACTION %> = '<%= GET_ACTION %>';
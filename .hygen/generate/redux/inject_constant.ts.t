---
to: src/constant.ts
inject: true
append: true
skip_if: <%= h.changeCase.upper(name) %>
---
<% NAME = h.changeCase.upper(name) -%>

export const GET_<%= NAME %> = 'GET_<%= NAME %>';
export const UPDATE_<%= NAME %> = 'UPDATE_<%= NAME %>';
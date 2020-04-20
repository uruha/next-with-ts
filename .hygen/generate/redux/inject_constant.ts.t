---
to: src/constant.ts
inject: true
append: true
skip_if: <%= h.changeCase.upper(name) %>
---
<% ACTION =  h.changeCase.upper(name) -%>

export const GET_<%= ACTION %> = 'GET_<%= ACTION %>';
export const UPDATE_<%= ACTION %> = 'UPDATE_<%= ACTION %>';
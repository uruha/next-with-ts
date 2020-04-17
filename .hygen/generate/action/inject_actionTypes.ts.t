---
to: src/actionTypes/index.ts
inject: true
append: true
skip_if: <%= actionName %>
---
export * from './<%= actionName %>';
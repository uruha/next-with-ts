---
to: src/actionTypes/index.ts
inject: true
append: true
skip_if: <%= name %>
---
export * from './<%= name %>';
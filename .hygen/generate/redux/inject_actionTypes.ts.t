---
to: "<%= type === 'action' ? `src/actionTypes/index.ts` : null  %>"
inject: true
append: true
skip_if: <%= name %>
---
export * from './<%= name %>';
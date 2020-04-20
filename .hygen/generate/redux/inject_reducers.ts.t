---
to: src/reducers/reducers.ts
inject: true
append: true
skip_if: <%= name %>
---
export { <%= name %> } from '~/reducers/<%= name %>';
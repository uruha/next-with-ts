---
to: src/actions/index.ts
inject: true
after: 'export {'
skip_if: '<%= name %>Actions,'
---
    <%= name %>Actions,
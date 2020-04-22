---
to: src/actions/index.ts
inject: true
prepend: true
skip_if: './<%= name %>'
---
import * as <%= name %>Actions from './<%= name %>';
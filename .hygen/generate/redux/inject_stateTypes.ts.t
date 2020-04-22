---
to: src/stateTypes.ts
inject: true
append: true
skip_if: <%= h.changeCase.pascal(name) %>
---

export interface <%= h.changeCase.pascal(name) %>State {
    value: string;
}
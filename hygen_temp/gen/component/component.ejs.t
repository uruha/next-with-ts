---
to: src/components/<%= h.changeCase.pascal(name) %>/index.tsx
---
<% Name = h.changeCase.pascal(name) %>
import * as React from 'react';

export type <%= Name %>Props = {};

const <%= Name %>: React.FC<<%= Name %>Props> = () => {
    return <div>Functional Component</div>;
};

export default <%= Name %>;

---
to: '<%= type === "pages" ? `${type}/${name}.tsx` : `src/components/${h.changeCase.pascal(name)}/index.tsx` %>'
---
import * as React from 'react';
<% Name = h.changeCase.pascal(name) %>
export type <%= Name %>Props = {};

const <%= Name %>: React.FC<<%= Name %>Props> = () => {
    return <div>Functional Component</div>;
};

export default <%= Name %>;
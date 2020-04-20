---
to: '<%= type === "pages" ? `${type}/${name}.tsx` : `src/components/${h.changeCase.pascal(name)}/index.tsx` %>'
---
<%
    Name = h.changeCase.pascal(name);
    Props = Name + 'Props';
-%>
import * as React from 'react';

export type <%= Props %> = {};

const <%= Name %>: React.FC<<%= Props %>> = () => {
    return <div>Functional Component</div>;
};

export default <%= Name %>;
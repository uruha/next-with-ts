---
to: 'src/<%= type %><%= type === "pages" ? `/__test__/${name}` : `/${h.changeCase.pascal(name)}/__test__/${h.changeCase.pascal(name)}` %>.test.tsx'
---
<% Name = h.changeCase.pascal(name) %>
/* eslint-env jest */
import * as React from 'react';
import { render } from '@testing-library/react';

import <%= Name %>, { <%= Name %>Props } from '~/components/<%= Name %>';

describe('<%= name %>', () => {
    let props: <%= Name %>Props;

    // Initialize
    beforeEach(() => {
        props = {};
    });

    it('renders without errors', () => {
        const { container } = render(<<%= Name %> {...props} />);
        expect(container).not.toBeNull();
    });
});
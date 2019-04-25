import * as React from 'react';

const Nav: React.FC = () => (
    <nav>
        <ul className="Nav-list">
            <li>Header</li>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
        </ul>
        <style jsx>{`
            .Nav-list {
                display: flex;
                padding: 12px 6px;
            }
            .Nav-list li {
                padding: 0 6px;
            }
        `}</style>
    </nav>
);

export default Nav;

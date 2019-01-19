import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header() {

  return (
    <div className={styles.header}>
          <h1>header</h1>
    </div>
  );
}

export default Header;

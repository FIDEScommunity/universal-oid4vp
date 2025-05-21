import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.push('/universal-oid4vp/docs/universal-oid4vp-introduction');
  }, [history]);

  return null; // geen content zichtbaar op rootpagina
}

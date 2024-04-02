import { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

export function HistoryRouter({ baseName, children, history }) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      setState({ location, action });
    });
    return () => unlisten();
  }, [history]);

  return (
    <Router basename={baseName} location={state.location} action={state.action}>
      {children}
    </Router>
  );
}

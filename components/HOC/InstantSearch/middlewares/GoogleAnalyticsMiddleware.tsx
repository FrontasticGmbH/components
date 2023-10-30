import { useLayoutEffect } from 'react';
import { Middleware, UiState } from 'instantsearch.js';
import debounce from 'lodash.debounce';
import { useInstantSearch } from 'react-instantsearch-hooks';

const middleware: Middleware = () => {
  const sendDebouncedEvent = debounce((uiState: UiState) => {
    gtag('event', 'Search UI State Changed', {
      ...uiState,
      page_path: window.location.pathname + window.location.search,
    });
  }, 3000);

  return {
    onStateChange({ uiState }) {
      sendDebouncedEvent(uiState);
    },
    subscribe() {},
    unsubscribe() {},
  };
};

const GoogleAnalyticsMiddleware: React.FC = () => {
  const { addMiddlewares } = useInstantSearch();

  useLayoutEffect(() => {
    return addMiddlewares(middleware);
  }, [addMiddlewares]);

  return null;
};

export default GoogleAnalyticsMiddleware;

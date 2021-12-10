import { useEffect } from 'react';
import useGlobalContext from './useGlobalContext';

const useTitle = title => {
  const { app } = useGlobalContext();

  useEffect(() => {
    const previous = app.title;
    app.title = title;

    return () => {
      app.title = previous;
    };
  }, []);
};

export default useTitle;

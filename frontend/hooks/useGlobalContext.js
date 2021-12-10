import { useContext } from 'react';
import { GlobalContext } from 'global-context';

const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;

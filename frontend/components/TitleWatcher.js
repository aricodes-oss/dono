import { useGlobalContext } from 'hooks';
import { observer } from 'mobx-react';

const TitleWatcher = () => {
  const { app } = useGlobalContext();

  const computed = app.title ? `${app.title} | Dono` : 'Dono';

  return <title>{computed}</title>;
};

export default observer(TitleWatcher);

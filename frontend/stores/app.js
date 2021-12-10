import { makeAutoObservable } from 'mobx';

class AppStore {
  title = '';

  pageName = '';

  rootStore = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default AppStore;

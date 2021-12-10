import { makeAutoObservable } from 'mobx';
import AppStore from './app';

class RootStore {
  app = null;

  constructor() {
    this.app = new AppStore(this);

    makeAutoObservable(this);
  }
}

export default RootStore;

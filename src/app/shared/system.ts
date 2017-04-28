export interface System {
  baseApiURL: string;
  appTitle: string;
  getBaseApiURL(): string;
}

export const system: System = {
  baseApiURL: 'api',
  appTitle: '',
  getBaseApiURL(): string {
    return this.baseApiURL;
  }
};

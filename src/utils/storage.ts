class Storage<T> {
  private _key: string;

  private getValue(key: string): T | null {
    const stringValue = localStorage.getItem(key);
    if (!stringValue) return null;

    return JSON.parse(stringValue);
  }
  constructor(key: string) {
    this._key = key;
  }

  get key(): string {
    return this._key;
  }
  set key(x: string) {
    const value = localStorage.getItem(this._key);

    if (!value) {
      this._key = x;
      return;
    }

    localStorage.removeItem(this._key);
    localStorage.setItem(x, value);
    this._key = x;
  }

  get value(): T | null {
    return this.getValue(this._key);
  }
  set value(x: T) {
    if (!x) return;

    const value = JSON.stringify(x);
    localStorage.setItem(this._key, value);
  }

  clean() {
    localStorage.removeItem(this._key);
  }
}

export default Storage;

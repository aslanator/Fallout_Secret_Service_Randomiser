export class ExpirableLocalStorage {

  expire = 300;

  constructor() {
    this._fixMode = localStorage.getItem('fixMode') ? true : false;
  }

  get fixMode() {
    return this._fixMode;
  }

  set fixMode(value) {
    if(value) {
      this._fixMode = true;
      localStorage.setItem('fixMode', '1');
    }
    else {
      this._fixMode = false;
      localStorage.removeItem('fixMode');
    }
  }

  get(key) {
    let content;
    const contentString = localStorage.getItem(key);
    try{
      content = JSON.parse(contentString);
    }
    catch (e) {
      console.error(e);
    }
    if(!content 
      || (!this.fixMode && (!content.expire || !content.data || new Date(content.expire) < new Date()))) {
      return false;
    }
    return content.data;
  }

  set(key, data) {
    const expire = new Date();
    expire.setSeconds(expire.getSeconds() + this.expire);
    return localStorage.setItem(key, JSON.stringify({expire, data}));
  }
}

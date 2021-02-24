export class ExpirableLocalStorage {

  expire = 5;

  get(key) {
    let content;
    const contentString = localStorage.getItem(key);
    try{
      content = JSON.parse(contentString);
    }
    catch (e) {
      console.error(e);
    }
    if(!content || !content.expire || !content.data || new Date(content.expire) < new Date()) {
      return false;
    }
    return content.data;
  }

  set(key, data) {
    const expire = new Date();
    expire.setMinutes(expire.getMinutes() + this.expire);
    return localStorage.setItem(key, JSON.stringify({expire, data}));
  }
}

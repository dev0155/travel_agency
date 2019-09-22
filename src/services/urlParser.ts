export function addParams(url = '?', query = {}) {
    url += '?';
    // @ts-ignore
    const q = query.q;
    // @ts-ignore
    const {skip, limit, ...others} = query;
    const obj2 = {skip, limit};
    const toUrl = {};
    Object.assign(toUrl, q, obj2);
  
    for (const key in toUrl) {
       if (toUrl[key]) {
         url += `${key}=${(toUrl[key])}&`;
       }
    }
    return url;
  }
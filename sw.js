const C='wt-v1',SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method!='GET'||!(u.origin==location.origin||u.hostname=='www.gstatic.com'))return;
 e.respondWith(caches.open(C).then(async c=>{
  if(r.mode=='navigate')return fetch(r).then(x=>{if(x.ok)c.put('index.html',x.clone());return x}).catch(()=>c.match('index.html'));
  const m=await c.match(r),n=fetch(r).then(x=>{if(x.ok)c.put(r,x.clone());return x}).catch(()=>m);return m||n}))});

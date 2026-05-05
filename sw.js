const CACHE_NAME='chord-detective-v5';
const APP_SHELL=[
  './',
  './index.html',
  './app-logic.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  const isShellAsset=APP_SHELL.some(asset=>{
    if(asset==='./')return false;
    return url.pathname.endsWith(asset.replace('./','/'));
  });

  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req)
        .then(res=>{
          const copy=res.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));
          return res;
        })
        .catch(async()=>(
          await caches.match(req)
          || await caches.match('./index.html')
          || await caches.match('./')
        ))
    );
    return;
  }

  if(isShellAsset){
    event.respondWith(
      caches.match(req).then(async cached=>{
        const network=fetch(req).then(res=>{
          caches.open(CACHE_NAME).then(cache=>cache.put(req,res.clone()));
          return res;
        }).catch(()=>cached);
        return cached||network;
      })
    );
  }
});

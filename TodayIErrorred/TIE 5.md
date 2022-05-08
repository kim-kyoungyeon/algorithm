## err1

```jsx
node:events:368
      throw er; // Unhandled 'error' event
      ^

Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (node:net:1317:21)
    at listenInCluster (node:net:1382:12)
    at Server.listen (node:net:1469:7)
    at Function.listen (/home/k2y/sec3/im-sprint-practice-deploy/server/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/home/k2y/sec3/im-sprint-practice-deploy/server/app.js:138:5)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1361:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EACCES',
  errno: -13,
  syscall: 'listen',
  address: '0.0.0.0',
  port: 80
}

/home/ubuntu/.pm2/logs/server-error.log last 15 lines:
0|server   |     syscall: 'connect',
0|server   |     address: '127.0.0.1',
0|server   |     port: 3306,
0|server   |     fatal: true
0|server   |   },
0|server   |   original: Error: connect ECONNREFUSED 127.0.0.1:3306
0|server   |       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1161:16) {
0|server   |     errno: -111,
0|server   |     code: 'ECONNREFUSED',
0|server   |     syscall: 'connect',
0|server   |     address: '127.0.0.1',
0|server   |     port: 3306,
0|server   |     fatal: true
0|server   |   }
0|server   | }

/home/ubuntu/.pm2/logs/app-out.log last 15 lines:
/home/ubuntu/.pm2/logs/app-error.log last 15 lines:
1|app      |     at listenInCluster (node:net:1382:12)
1|app      |     at Server.listen (node:net:1469:7)
1|app      |     at Function.listen (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/express/lib/application.js:618:24)
1|app      |     at Object.<anonymous> (/home/ubuntu/im-sprint-practice-deploy/server/app.js:135:5)
1|app      |     at Module._compile (node:internal/modules/cjs/loader:1101:14)
1|app      |     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
1|app      |     at Module.load (node:internal/modules/cjs/loader:981:32)
1|app      |     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
1|app      |     at Object.<anonymous> (/home/ubuntu/.nvm/versions/node/v16.13.0/lib/node_modules/pm2/lib/ProcessContainerFork.js:33:23) {
1|app      |   code: 'EACCES',
1|app      |   errno: -13,
1|app      |   syscall: 'listen',
1|app      |   address: '0.0.0.0',
1|app      |   port: 80
1|app      | }
```

## err2

```jsx
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/response.js:776:10)
    at ServerResponse.send (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/response.js:170:12)
    at /home/k2y/sec3/Music-Flower/server/server.js:53:19
    at Layer.handle_error (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:321:13)
    at /home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:341:12)
    at next (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:275:10)
```

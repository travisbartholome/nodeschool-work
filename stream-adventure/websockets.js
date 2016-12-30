const WebSocket = require('websocket-stream');
const ws = WebSocket('ws://localhost:8099');
ws.write('hello\n');

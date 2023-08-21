const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('start', (start, end) =>{
    console.log(`Started from ${start} to ${end}`);
});

myEmitter.emit('start', 1, 100);
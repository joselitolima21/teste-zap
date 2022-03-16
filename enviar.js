require('./init');
const emitter =  require('./emitter')

setInterval(()=>{ 
    const numero = '558698679527'
    emitter.emit('mandaEmail',numero);
},2000)
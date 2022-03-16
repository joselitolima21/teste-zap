const wppconnect = require('@wppconnect-team/wppconnect');
const emitter =  require('./emitter')

wppconnect.create().then(client => { 
    emitter.on('mandaEmail', (numero) => {
        client
        .sendText(numero, 'Chama')
        .then((result) => {
            console.log('Enviou:');
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
});})

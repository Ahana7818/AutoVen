const cron= require('node-cron');

cron.schedule('4 * * * *',() =>{
console.log ('Run smoke Test cases');});

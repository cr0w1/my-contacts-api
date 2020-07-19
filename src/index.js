const app = require('./app');
const { createConnection } = require('./database');


createConnection();
app.listen( process.env.PORT || 3000 );
console.log('Server on port ', process.env.PORT || 3000);
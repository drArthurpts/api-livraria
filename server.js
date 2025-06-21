import "dotenv/config"; // Importa as variáveis de ambiente
import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor escutando http://localhost:3000');
});


const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'surviVannila.aternos.me', // Ganti IP Aternos kamu
    port: 54269,                         // Ganti Port jika ada (default 25565)
    username: 'antonorf09 §r[§bBot§r]',                 // Nama bot
    version: '1.16.5'                    // Sesuaikan versi server
  });

  bot.on('spawn', () => {
    console.log('Bot berhasil masuk server!');
    // Lompat tiap 30 detik agar tidak terkena kick AFK
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('end', () => {
    console.log('Koneksi terputus. Mencoba hubungkan ulang dalam 5 detik...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', (err) => console.log('Error:', err));
}

createBot();
  

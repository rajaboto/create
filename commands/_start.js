/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;

Bot.sendKeyboard('📈 JOIN VIP,☄️ TRIAL SIGNAL\n🗓️ PANDUAN,💬 SUPPORT', '*Selamat datang di Bit Signal Fx ' + firstName + '!*\n\nini adalah bot sederhana yang akan membawa keberuntungan dalam trading anda!\n\n*Technical Analysis & Fundamental*\n\n🔹 5 - 7 Signal perhari\n🔹 Signal Buy/Sell harian Nyata\n🔹 Profit up to 350 pip perMinggu\n🔹 Rendah resiko!\n🔹 Bit Signal Menjamin 99,9% Profit Konsisten!\n\nCoba  ☄️TRIAL SIGNAL terlebih dahulu!');

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

Bot.sendKeyboard('ð JOIN VIP,âï¸ TRIAL SIGNAL\nðï¸ PANDUAN,ð¬ SUPPORT', '*Selamat datang di Bit Signal Fx ' + firstName + '!*\n\nini adalah bot sederhana yang akan membawa keberuntungan dalam trading anda!\n\n*Technical Analysis & Fundamental*\n\nð¹ 5 - 7 Signal perhari\nð¹ Signal Buy/Sell harian Nyata\nð¹ Profit up to 350 pip perMinggu\nð¹ Rendah resiko!\nð¹ Bit Signal Menjamin 99,9% Profit Konsisten!\n\nCoba  âï¸TRIAL SIGNAL terlebih dahulu!');

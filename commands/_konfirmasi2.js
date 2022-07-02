/*CMD
  command: /konfirmasi2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💳 *Nama Pengirim?*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nama", data.message, "text");
// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "🏆REG VIP <nama> <bank> " + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendKeyboard("📈 JOIN VIP,☄️ TRIAL SIGNAL\n🗓️ PANDUAN,💬 SUPPORT", "*Konfirmasi pembayaran berhasil..!*");
Bot.sendMessage("Kami akan mengirimkan notifikasi setelah akun anda di setujui, terima kasih.");

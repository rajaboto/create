/*CMD
  command: /adminReply2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Pesan

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = " " + message + " ";
Bot.sendMessageToChatWithId(5080376190, msg);
Bot.sendMessageToChatWithId(963013265, msg);
Bot.sendMessageToChatWithId(1490897631, msg);
Bot.sendMessage("Message was sended")

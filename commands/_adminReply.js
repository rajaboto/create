/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Message :

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = " " + message + " ";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sended")

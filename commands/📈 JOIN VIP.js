/*CMD
  command: 📈 JOIN VIP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
❗*Syarat Berlangganan Bit Signal FX*

🔹 Membayar Biaya Berlangganan VIP mulai dari Rp 100.000,- / bulan (1 bulan = 30 hari)

🔹 Dilarang membagikan signal yang di peroleh dari Bit Signal FX

🔹 Siap merekomendasikan Bit Signal FX


Pilih *YA* untuk melanjutkan! :)
  ANSWER
  keyboard: ✅ YA
  aliases: 
CMD*/

if(data.message=="✅ YA"){
   Bot.runCommand("/verifi")
}else{
  Bot.sendMessage('❌Perintah salah!');
}

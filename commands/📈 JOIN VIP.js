/*CMD
  command: ๐ JOIN VIP
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
โ*Syarat Berlangganan Bit Signal FX*

๐น Membayar Biaya Berlangganan VIP mulai dari Rp 100.000,- / bulan (1 bulan = 30 hari)

๐น Dilarang membagikan signal yang di peroleh dari Bit Signal FX

๐น Siap merekomendasikan Bit Signal FX


Pilih *YA* untuk melanjutkan! :)
  ANSWER
  keyboard: โ YA
  aliases: 
CMD*/

if(data.message=="โ YA"){
   Bot.runCommand("/verifi")
}else{
  Bot.sendMessage('โPerintah salah!');
}

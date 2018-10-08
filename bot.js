const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
كثير من صفحات التاريخ طُويت ، 
وسنطوي صفحات سجلها التاريخ لأصحابها .. 
وستشرق شمس الديسكورد في صباحها ، 
على العهد الجديد .. حياكم الله معنا
https://discord.gg/zKXKnes                   
[ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
كثير من صفحات التاريخ طُويت ، 
وسنطوي صفحات سجلها التاريخ لأصحابها .. 
وستشرق شمس الديسكورد في صباحها ، 
على العهد الجديد .. حياكم الله معنا
https://discord.gg/zKXKnes               
[ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);

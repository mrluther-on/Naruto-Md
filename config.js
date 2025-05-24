const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg"                       // put your app url here,
global.email ="kushimotunde7@gmail.com"
global.location="Nigeria,lagos."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://steezy_maxwell:Steezy._.and._.Maxwell@maxwellandsteezy.wbmgyr4.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI=process.env.DATABASE_URL || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/LAGOS";
global.github=process.env.GITHUB|| "https://github.com/Ednut001/naruto-md/tree/main";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx";
global.website=process.env.GURL || "https://chat.whatsapp.com/HfMmL74aP3lC24AcHtebWx" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348102487241" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348102487241";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348102487241";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || "2",  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "https://telegra.ph/file/9bf1a1bcf371e65699cb8.jpg,https://telegra.ph/file/81326462c7b46a26ea380.jpg,https://telegra.ph/file/03f39cfcf936d65455b0f.jpg,https://telegra.ph/file/4d71f28cdb62409a17c81.jpg,https://telegra.ph/file/a79cbfe94e1fd41809c17.jpg,https://telegra.ph/file/318abcc79a289cec3aca4.jpg",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348102487241";



module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS : process.env.PREFIX || ".",
  BRANCH : process.env.BRANCH   || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "⏤͟͟͞͞★Ednut 🫶࿐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ naruto md 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author: process.env.PACK_AUTHER || "naruto",
  packname: process.env.PACK_NAME || "md",
  botname : process.env.BOT_NAME  || "Naruto-md",
  ownername:process.env.OWNER_NAME|| "⏤͟͟͞͞★Ednut 🫶࿐",

  sessionName:process.env.SESSION_ID|| "SUHAIL_06_02_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4UjhlbW9aTDhld3dEV2J6c0ZPYlMrNGMyT3BGaS9xMmxaSnNVbGc3TVJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTDlldnRSalN6ZVd0QkQzemFvV0ZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2N2U4OTkyLWJkYWItNDVkZC1iODc0LTRmNmViMWQ0ZDEyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAxNzYsXG4gICAgICAyMDAsXG4gICAgICA1NixcbiAgICAgIDMsXG4gICAgICAzOCxcbiAgICAgIDEyMixcbiAgICAgIDI0MSxcbiAgICAgIDEzOSxcbiAgICAgIDExLFxuICAgICAgMjEzLFxuICAgICAgOCxcbiAgICAgIDE4LFxuICAgICAgMTg0LFxuICAgICAgMTExLFxuICAgICAgMTIsXG4gICAgICAxODAsXG4gICAgICAyMzcsXG4gICAgICA3NyxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAxMzAsXG4gICAgICA2MCxcbiAgICAgIDY0LFxuICAgICAgODksXG4gICAgICA2MyxcbiAgICAgIDMyLFxuICAgICAgNyxcbiAgICAgIDM1LFxuICAgICAgMTYxLFxuICAgICAgMjEyLFxuICAgICAgMTExLFxuICAgICAgNjAsXG4gICAgICAxNTcsXG4gICAgICA4NCxcbiAgICAgIDE4NixcbiAgICAgIDgwLFxuICAgICAgMTc2LFxuICAgICAgMjMzLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0hFdDlNR0VOUEJ4Y0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1bE9Ia1NrRkdNNGduVU9xcjYrS3VJbzhYd3J0enZvL2RmTUQ0c2tOc0drPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlN0MThONDRramE3NUZKTjNPaE1MbVRLNHZZclVLYVpQTVFiZ3lkb295bWV3YzloNm9md1BUZThhYlc1VWw2eVBUNlpUeVhybkNHdzJpenlYbTJKUkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkppeXUvQnBYVGJqcGtrV2M0QVRZUDBSdURWTlBnMktjTElIa25qQnNLWlJzdFZ6Tm5ZdE10Y01ZdHRYRWJZakJoNVhtY0lJOTRFSjFrUEY0T1pIT2p3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4MzQ1MDg0NTY4OjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi77ys772V772U772I772F772SXCIsXG4gICAgXCJsaWRcIjogXCIxOTQwODE0ODU0OTY1MTA6NDdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgzNDUwODQ1Njg6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4MDY2NTE5XG59Igp9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "GWQ6jVy9MBpfYF9SnyG8jz8p",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "https://api.elevenlabs.io/v1/text-to-speech/<voice-id>",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Legendary ednut",



};




























global.isMongodb = true; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 

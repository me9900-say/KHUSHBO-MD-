const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BOSS-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01kdDVkUUwyVDJ4ZFpzQVI1TkQwcldFcFRYaTZPdGxqQUNzNHAvQVgydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVWs1K1BzMExVLzgxSjd2N2cwZkd3RkVwU3BCRlQxRU12aTJDQjRzYWdoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQk94YVhwcFUwa2VIbjFId2E3R0NPclhvdmtoWnd6WENObUh5dWE0TFdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T3hHZ0FmMXRUKzJUM3ptK0VWbG1LWFB6aG5uNkRlbG1IdnpITnVuOTFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOQ24zeGxpN0FEdEZPWVVMVTVSNTk1R2JPazdHejJWMUxCNlZmQktQME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU1YmZtZHFyWXg3RU5hRW1TaVRLL2owdnVaR3MwZFpCWFFkQUx3ejNlMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBvbHBYcGY2eEFuZ2tqRlcyMUt4KzEwSTFpMzRjdk5MWkhjMHpBcWNXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTJ1Wnp0a0tCc05xcGM0K1J6ek81M25xNTBVK0JlZVdQa0FYaSt4MWdHND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik50dTlWZzFBM0tYVXk2UU9CNzR6WkhSRDB4dXUzRGpMcUtYdWl5eUh2ZnY0dWJCV3lFNERJUDhBeXpLVnlKejF1c3Zjd3ZHOWFsQ0wyZ0pWVzFONGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJ0OGt4WGxrUU5TVmVYSXFJY0oxc3pWWDNWNDA2cTRlSWI0c3pINUhJWnFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwODE0NzEwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0E0NUYwQ0JDMTkwM0RFQkVCNTE4NDk2MTY3MjNDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NDQwNzQ2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDgxNDcxMDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzQjRFMDU5RDFDRTMwNzQwRUI4MDQ0Njc1OUM0QUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NDQ0MDc0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA4MTQ3MTA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRDRFNzBGRjA4MEFENjUzMzI1OEJCN0UyNDdBMEE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzQ0NDA3NDd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwODE0NzEwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzJBNzc0OTQ4QzJFOTlBQ0MzNTk3NDBEOUI3MUFCMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc0NDQwNzQ4fV0sIm5leHRQcmVLZXlJZCI6MTYyNSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjE2MjUsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjkyMzMwODE0NzEwNDoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTY0MTQxMTM3Nzk4NzU6MkBsaWQiLCJuYW1lIjoiS0hVU0hCTyBLSEFUT09O8J+MvvCfkpXwn6SM8J+PuyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhmNGVFQkVKaWlqODRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZVh6MkpqVm9FNXM0ZTVXWkFWZjdTRHBhS05CR1NPV1NpY1FWaGlGV3JsND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVFdIM0RneEt3eUhRVWtvZ3lzUkJrSktsT29KQnlyU2hLb2s0c3NWSDJXdS8wNm93bVBuVGNYSEw5QXMrT2h2MDBXNWxqUmJ0azJ6cXhVSlhLZEhYQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6InFRNWU5NGNkbFNmWnFUbEUwU3BERjJxY01ST3JRcFFaUkJ3RHpqakYzcjhYeTd6QWJsczBtUExZR3NuSXRWOUhFU3VzaGpwRWZMclVObWI5N2tUZWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA4MTQ3MTA0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGw4OWlZMWFCT2JPSHVWbVFGWCswZzZXaWpRUmtqbGtvbkVGWVloVnE1ZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc0NDQwNzQxLCJsYXN0UHJvcEhhc2giOiIzbWwxalMiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURxLyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MUZAMMIL_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/80ntso.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "MUZAMMIL_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "MUZAMMIL_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923142854207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MUZAMMIL_MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 MUZAMMIL_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/80ntso.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*MUZAMMIL_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923142854207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

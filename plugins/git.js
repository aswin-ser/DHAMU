const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/NfIk4Qh.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Shahid-devil😈*
*owner number wa.me/919895828468*

*bot setting video : https://youtu.be/RlSG4ZgPls0*

*github link : https://github.com/aswin-ser/DHAMU*

*audio commads : https://github.com/aswin-ser/DHAMU/tree/master/uploads*
`}) 

}));

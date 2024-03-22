import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://telegra.ph/file/fead512c3b76a675fb78f.jpg`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m)} 
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['عمك']
handler.tags = ['img']
handler.command = /^(اوتشيها)$/i
export default handler

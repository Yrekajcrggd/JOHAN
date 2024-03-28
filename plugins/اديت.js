let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "⚽",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['شادو']
handler.tags = ['anime']
handler.command = /^(شادو)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/5fb7c13a4d93917f97ff3.mp4',
'https://telegra.ph/file/22ecc343f08752befd263.mp4',
'https://telegra.ph/file/ceccbf7b0430ea3e540df.mp4',
'https://telegra.ph/file/c41394beb1d1dc75c21b2.mp4',
'https://telegra.ph/file/7e83a6c0581f1ac6fc896.mp4',
'https://telegra.ph/file/6459a5571aa37b3ff4d09.mp4',
'https://telegra.ph/file/9de72c2d414605c800898.mp4',
'https://telegra.ph/file/c6c9f0e8d39fd59e386dd.mp4',
'https://telegra.ph/file/a631fa901c8d85c9c9985.mp4https://telegra.ph/file/c6c9f0e8d39fd59e386dd.mp4',
'https://telegra.ph/file/46477c73c9a14ed3726ea.mp4',
'https://telegra.ph/file/e1204862b247b4d183595.mp4',



'',
]

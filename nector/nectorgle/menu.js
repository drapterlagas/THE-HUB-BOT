import config from '../../config.cjs';

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🔥');
    const end = new Date().getTime();
    const responseTime = ((end - start) / 1000).toFixed(2);

    const uptimeSeconds = process.uptime();
    const hours = Math.floor(uptimeSeconds / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const uptime = `${hours}h ${minutes}m ${seconds}s`;

    // Profile Picture Fallback
    let profilePictureUrl = '';
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1500);
      const pp = await sock.profilePictureUrl(m.sender, 'image', { signal: controller.signal });
      clearTimeout(timeout);
      if (pp) profilePictureUrl = pp;
    } catch {
      console.log('🖼️ Failed to fetch profile pic.');
    }

    const menuText = `
┏━✦━ ✨『 *THE-HUB-BOT* 』✨ ━✦━┓
┃ 🤖 *Bot:*     THE-HUB-BOT
┃ 🔧 *Version:* 2.0.0
┃ 📡 *Mode:*    Public
┃ ⚡ *Speed:*   ${responseTime}s
┃ ⏱️ *Uptime:*  ${uptime}
┃ 🧩 *Prefix:*  ${prefix}
┃ 👑 *Owner:*   ⓃⒺCⓉOR🍯
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

🌟 *Welcome to the command hub!* 🌟
╭─⟤ ✨ *𝑴𝑨𝑰𝑵 𝑴𝑬𝑵𝑼* ⟢ ──────
│
├── 🛠️ *Utility & Tools*
│   ├ ⚡ .uptime    ⚙️
│   ├ 🪄 .jid       🔍
│   ├ 🛰️ .ping      📶
│   ├ 📝 .request   📨
│   ├ 🧰 .repo      🔧
│   ├ 📦 .app       📱
│   └ 🌐 .host      💻
│
├── 🌐 *Internet / Media*
│   ├ ☀️ .weather   🌦️
│   ├ 🎶 .play      🎧
│   ├ 🎵 .play2     🎼
│   ├ 🎺 .play3     🎷
│   ├ 📹 .vv        🎥
│   ├ 📺 .vv2       🎬
│   ├ 📼 .vv3       📀
│   ├ 🎞️ .video    📹
│   ├ 🎯 .tiktokdl  🎵
│   ├ 🐼 .tiktok    🎭
│   ├ 🐦 .fbdl      🕊️
│   ├ 🐘 .fb        📘
│   ├ 🐳 .facebook  🌊
│   ├ 🚀 .todown    ⬇️
│   ├ 🎤 .lyrics    🎙️
│   ├ 🖼️ .gimage    🖌️
│   ├ 📸 .img       📷
│   └ 🌄 .image     🏞️
│
├── 🎉 *Fun & Social*
│   ├ 😈 .insult    👹
│   ├ 💘 .love      💖
│   └ 🎲 .dare      🎯
│
├── 📖 *Religion & AI*
│   ├ 📜 .bible     ✝️
│   └ 🤖 .gpt       🧠
│
├── 🔗 *Group Links & Invites*
│   ├ 🔗 .linkgc    🌐
│   ├ 🏷️ .grouplink 🔍
│   ├ 🎫 .invite    ✉️
│   ├ 🧲 .bring     💌
│   └ 🚪 .join      🚶
│
├── 👥 *Group Management*
│   ├ 🎉 .welcome   🎊
│   ├ 🏷️ .tagall    🗣️
│   ├ 💬 .statusreply 📝
│   ├ 📝 .groupinfo 📰
│   ├ 🔓 .group open/close 🔒
│   ├ 🖼️ .getpp     🖼️
│   ├ 🚶 .left      🚪
│   ├ 🏃 .exit      🏠
│   ├ 🚀 .leave     🏃
│   ├ ❌ .remove    🚫
│   ├ 👢 .kick      👢
│   └ 💣 .kickall   💥
│
├── 🛡️ *Admin / Moderation*
│   ├ 🔥 .makeadmin 👑
│   ├ 🚀 .adminup   🛡️
│   ├ 🎯 .promote   🏆
│   ├ 🪓 .unadmin   🔽
│   ├ ⬇️ .demote    🚫
│   ├ 🗑️ .del       🗑️
│   ├ 🚮 .delete    ✂️
│   ├ 🌍 .blockcountry 🚷
│   ├ 🚧 .blockunknown 🔒
│   ├ 📵 .anticall  🚫
│   ├ ⚔️ .antispam  🛡️
│   ├ 🗃️ .antidelete on/off 🗂️
│   ├ 🛡️ .security  🔐
│   ├ 🐞 .bug       🪲
│   └ 📣 .report    📝
│
├── ⚙️ *Group Settings*
│   ├ 🔧 .settings  🛠️
│   ├ 🔤 .setprefix 🔠
│   ├ 🏷️ .setname   📝
│   ├ 📝 .setgroupname 🏷️
│   ├ 🖊️ .setgroupbio 📰
│   ├ 📜 .setdesc   📖
│   └ 📑 .setdescription 📝
│
├── 🔄 *Automation*
│   ├ 🤖 .autotyping 🔄
│   ├ 👁️ .autostatusview 👀
│   ├ 👓 .autosview 🕶️
│   ├ 📺 .autostatus 📝
│   ├ 🎥 .autorecording 🎬
│   ├ ❤️ .autoreact ❤️
│   ├ 😉 .autolikestatus on/off🥰
│   ├ 📖 .autoread   📚
│   └ 🔥 .alwaysonline 🌐
│
├── 🎭 *Sticker & Media*
│   ├ 🎨 .sticker   🖌️
│   ├ 🗂️ .vcf       📇
│   ├ 🔗 .url       🌎
│   └ 🖼️ .logo      🎨
│
├── 🤖 *Bot Controls*
│   ├ 🛠️ .update    🔄
│   ├ 👑 .owner     👤
│   ├ 🐙 .clonebot  🐚
│   ├ 🪄 .pair      🧩
│   ├ 🔍 .getpair   🧩
│   ├ ⚖️ .mode      ⚙️
│   ├ 💬 .chatbox   💭
│   └ 🌟 .addprem   💎
│
├── 📜 *Menus & Misc*
│   ├ 📜 .menu      🗒️
│   ├ 📋 .menu2     📄
│   ├ 🪄 .ht        ✨
│   └ 🕶️ .hidetag   🥷
│
╰───────────────────────


━━━ ❖ ⚡ *THE-HUB-BOT V2.0* ⚡ ❖ ━━━
✨ Innovating Chat, One Command at a Time ✨
`.trim();

    // Newsletter Context
    const newsletterContext = {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "THE-HUB-BOT",
        newsletterJid: "120363395396503029@newsletter"
      }
    };

    // Send Image Menu
    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText,
      contextInfo: newsletterContext
    }, { quoted: m });

    // 🎧 Random Songs
    const songUrls = [
      ''
    ];
    const randomSong = songUrls[Math.floor(Math.random() * songUrls.length)];

    await sock.sendMessage(m.from, {
      audio: { url: randomSong },
      mimetype: 'audio/mpeg',
      ptt: false,
      contextInfo: newsletterContext
    }, { quoted: m });
  }
};

export default menu;
      

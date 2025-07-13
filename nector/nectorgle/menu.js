import config from '../../config.cjs';

const startTime = Date.now();

const formatRuntime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('💞');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const runtime = formatRuntime(Date.now() - startTime);
    const mode = m.isGroup ? "public" : "private";
    const ownerName = config.OWNER_NAME || "ⓃⒺCⓉOR🍯";

    let profilePictureUrl = 'https://files.catbox.moe/03qy6k.jpg';
    try {
      const pp = await sock.profilePictureUrl(m.sender, 'image');
      if (pp) profilePictureUrl = pp;
    } catch (err) {
      console.error("Error fetching profile picture:", err);
    }

    const menuText = `

┏━✦━ ✨『 *THE-HUB-BOT* 』✨ ━✦━┓
┃ 🔧 *Version:* 2.0.0
┃ 📡 *Mode:*    ${mode}
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
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "THE-HUB-BOT-MENU",
          newsletterJid: "120363395396503029@newsletter"
        }
      }
    }, { quoted: m });
  }
};

export default menu;
                          

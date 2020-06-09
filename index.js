const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
client.once('ready', () => {
  console.log("디스코드 봇 실행 준비 완료!");
  client.user.setActivity('^도움을 치면 이 봇의 명령어를 알아볼수있습니다.', { type: 'WATCHING' })
});
const config = require('./chch.json');
client.on('message', message => {

    if (message.content === "^봇 정보"){
      //봇의 정보
      message.reply("```이봇은 node.js를 기반으로 제작한 디스코드 봇 입니다. 이 봇을 만든사람은 i휘핑의 채널입니다``` ");
    }
    if (message.content === "^테스트"){    
      //테스트
      return message.channel.send("```작동합니다```");
    }
    if (message.content === "^영어"){
      //영어
      message.channel.send("```english 영어```");
    }
    if (message.content === "^고마운사람"){
      //이 봇을 제작하며 고마웠던사람
      message.channel.send("```마인크래프트 서버 wldh서버 운영자, 개발자인 wjdwldh님 감사합니다```");
    }
    if (message.content === "^도움"){
      //도움말
      message.channel.send("```^봇 정보=봇의정보표시 ^테스트=테스트 ^영어=영어를 표시함. ^샌즈=샌즈아시는구나 ^고마운사람=이 봇을 만들면서 고마운사람을 말합니다! ^유튜브채널=제작자의 유튜브채널. ^웹사이트=제작자의 웹사이트. ^봇 초대링크=봇초대링크 ^프사=자신의 프로필사진을 보여줍니다!```");
    }
    if (message.content === "^유튜브 채널"){
      //개발자의 유튜브채널을 보여줍니다.
      message.channel.send("```https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw```");
    }
    if (message.content === "^공지사항"){
      //공지사항을 보냅니다
        message.channel.send("```지금은 아무런 공지사항이 없습니다..```");
      }
      if (message.content === "^웹사이트"){
        //웹사이트 링크를 보냅니다
        message.channel.send("```이 봇이랑 같이 개발중입니다. 완료돼면 말하겠습니다!```");
      }
      if (message.content === "^봇 초대링크" ) {
        //봇의 초대링크를 보여줍니다.
        message.channel.send("https://discord.com/api/oauth2/authorize?client_id=718398444263309372&permissions=8&scope=bot");
      }
      if (message.content === '^프사') {
        // 유저의 아바타를 보여줍니다.(이게돼네)
        message.reply(message.author.displayAvatarURL());
      }
  });

  
// 내 디스코드 토큰으로 디스코드에 로그인..
client.login(config.token);
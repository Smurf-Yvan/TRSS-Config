const msg = ' \n\r# 相思本是无凭语，莫向花笺费泪行 🌸\r***\r\r>爱莉希雅很高兴能再次和你相遇✨\r>生活中的每一刻都值得珍惜与欢笑，爱莉希雅希望你能在生活中快乐、健康、幸福，不要为了一些小事烦恼，不要为了一些无关紧要的人伤心，爱莉希雅会一直在你身边，支持你，鼓励你，陪伴你(˃ ⌑ ˂ഃ )💪\r>✨温馨提示:机器人拉群和使用完全免费\r>✨机器人不断学习进步当中，欢迎反馈改进建议 \r\r# 所有指令均要 @机器人\r ✨以下 @ 是有效的: \r\r>1. 长按头像\r>2. 输入 / 唤起机器人指令\r>3. 输入 @ 后点击机器人头像\r>4. 回复机器人消息\r>5. 点击消息下方的按钮 \r\r# ✨以下 @ 是无效的:\r>1. 复制粘贴的指令 \r\r# 以下按钮是可以点击的喵～'
export class example3 extends plugin {
  constructor () {
    super({
      name: '按钮中心',
      dsc: '适用于铃音插件全局MD',
      event: 'message',
      priority: -1000002,
      rule: [
        {
          reg: '^#?按钮中心$',
          fnc: 'buttonCenter'
        },
        {
          reg: '',
          fnc: 'test',
          log: false
        },
      ]
    })
  }
  
  async test (e) {
    if( e.bot.config?.markdown )
      if( e.message.length == 1 && e.message[0].type == 'text' && e.message[0].text == '' ){
        this.e.msg = '#按钮中心'
        this.reply(msg)
      }
    return false
  }

  async buttonCenter (e) {
    this.reply(msg)
    return
  }
}
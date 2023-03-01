module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: '✨feature', name: 'feature:    增加新功能' },
    { value: '🐛fix', name: 'fix:    修复bug' },
    { value: '💎style', name: 'style:    样式修改不影响逻辑' },
    { value: '💄test', name: 'test:    测试用例新增、修改等' },
    { value: '🚀perf', name: 'perf:     性能优化' },
    { value: '🌠refactor', name: 'refactor: 功能/代码重构' },
    { value: '👷ci', name: 'ci:   项目架构相关部署' },
    { value: '📝docs', name: 'docs:     文档变更' },
    { value: '🔧chore', name: 'chore:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪revert', name: 'revert:   代码回退' },
    { value: '📦build', name: 'build:    打包' },
    { value: '✅release', name: 'release:  发布' }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  // scopes: [
  //   ['components', '组件相关'],
  //   ['hooks', 'hook 相关'],
  //   ['utils', 'utils 相关'],
  //   ['element-ui', '对 element-ui 的调整'],
  //   ['styles', '样式相关'],
  //   ['deps', '项目依赖'],
  //   ['auth', '对 auth 修改'],
  //   ['other', '其他修改'],
  //   // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
  //   ['custom', '以上都不是？我要自定义']
  // ].map(([value, description]) => {
  //   return {
  //     value,
  //     name: `${value.padEnd(30)} (${description})`
  //   }
  // }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
    scopeOverrides: {
      fix: [
        { name: 'merge' },
        { name: 'style' },
        { name: 'e2eTest' },
        { name: 'unitTest' }
      ]
    },
    */

  // 交互提示信息
  messages: {
    type: '请选择一种你的提交类型: \n',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认以上提交说明？(y/n/e/h)'
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  // allowBreakingChanges: ['feat', 'fix'],

  // 跳过要询问的步骤
  skipQuestions: ['body', 'footer'],

  // subject 限制长度
  subjectLimit: 72
  // breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}

// 这个文件是要配合 vscode 的插件 prettier 使用的，要确保编辑器安装了 prettier插件
module.exports = {
  /**
   * 字符串使用单引号
   */
  singleQuote: true,

  /**
   * 对象最后一个元素自动添加 拖尾逗号
   * none: 不添加
   */
  trailingComma: 'none',

  /**
   * 每行末尾自动添加分号
   */
  semi: false,

  /**
   * tab缩进大小,默认为2
   */
  tabWidth: 2,

  /**
   * 使用tab缩进，默认false
   */
  useTabs: false,

  /**
   * 对象中打印空格 默认true
   * true: { foo: bar }
   * false: {foo: bar}
   */
  bracketSpacing: true,

  /**
   * 箭头函数参数括号 默认avoid 可选 avoid| always
   * avoid 能省略括号的时候就省略 例如x => x
   * always 总是有括号
   */
  arrowParens: 'avoid',

  /**
   * 换行长度，默认80
   */
  printWidth: 200,

  /**
   * 将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
   * 例子：
   * 设置为true时：
   * <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}>
       Click Here
    </button>
   * 
   * 设置为false时
   * <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}
    >
       Click Here
    </button>
   */
  jsxBracketSameLine: true
}

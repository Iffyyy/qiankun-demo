module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  plugins: ['vue', '@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    jsx: true,
    useJSXTextNode: true,
    // project: './tsconfig.json',
    tsconfigRootDir: './',
    extraFileExtensions: [
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 1,
    // 缩进采用2个空格
    indent: [2, 2, { SwitchCase: 1 }],
    // 换行符编码采用unix编码。尤其是Git应该统一采用unix编码，防止不必要的提交。
    'linebreak-style': [0],
    // 使用单引号表示字符串
    quotes: [0, 'single', { allowTemplateLiterals: true }],
    // 不能遗漏分号，一个完整代码语句应该以分号结尾
    semi: [2, 'always'],
    // 在定义对象或数组时，最后一项不能加逗号
    'comma-dangle': [0, 'never'],
    // 在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
    'comma-spacing': [2, { before: false, after: true }],
    // 该规则规定了在对象字面量语法中，key和value之间的空白，冒号前和冒号后面都需要一个空格
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    // 如果逗号可以放在行首或行尾时，那么请放在行尾
    'comma-style': [2, 'last'],
    // 非空数组中不应该有多余的空格
    'array-bracket-spacing': [2, 'never'],
    // this的别名应该为that
    'consistent-this': [2, 'that', 'self', 'me', '_self', '_this', '_that'],
    // 每一行最大字符数为600
    'max-len': [1, 600], // airbnb use 100, wishlist, one day
    // 规定callback如果具有err参数，那么应该处理它，打印err 或者 error，一般在node环境下出现。
    'handle-callback-err': [0, '^(err|error)$'],
    'node/handle-callback-err': [0, '^(err|error)$'],
    // 构造函数首字母大写
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    // 禁止使用Array构造函数。视情况而定，一般情况下应该禁止。
    'no-array-constructor': 2,
    // 禁止使用arguments.caller和arguments.callee，一般情况下应该禁止。
    'no-caller': 2,
    // label和var申明的变量不能重名
    'no-label-var': 2,
    // 禁止使用label语句，主要防止循环复杂化，禁止go语句。
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],
    // 不要使用__proto__
    'no-proto': 2,
    // 不要和自身作比较
    'no-self-compare': 2,
    // 禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
    'no-shadow-restricted-names': 1,
    // 不要使用with语句
    'no-with': 2,
    // // 换行时，运算符在行尾。一般在出现在字符串拼接时
    // 'operator-linebreak': [2, { before: true, after: true }], // aibnb is disabling this rule
    // 给参数重新赋值不会报告错误。但是，建议不要给参数重新赋值。
    'no-param-reassign': 0,
    // 直接使用Object.prototype上的方法不会报错。但是，建议不要直接使用，应该以Object.prototype.method.call(）形式来使用
    'no-prototype-builtins': 0,
    // 关于模块的引入方法，现阶段多为混用模块，故禁止提示。
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/first': 0,
    // 允许下划线变量，underscore.js
    'no-underscore-dangle': 0,
    // 不建议使用二元混合操作符，避免歧义：let a=1+2*3
    'no-mixed-operators': 1,
    // 不建议使用多重赋值，比如:a=b=c=1
    'no-multi-assign': 1,
    // 允许使用++号
    'no-plusplus': 0,
    // 禁止使用var变量
    'no-var': 2,
    // //禁止直接使用arguments变量
    // 'prefer-rest-params': 1,
    // 允许使用continue语句
    'no-continue': 0,
    // 允许使用new 语句
    'no-new': 0,
    // 允许使用短路求值表达式（包括三元操作符的短路求值）
    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true }
    ],
    // 不建议嵌套的三元操作符
    'no-nested-ternary': 1,
    // 不建议声明与外层作用域同名的变量。后续应该逐渐禁止此类用法。
    'no-shadow': 0,
    // 声明后不再改变的变量应该使用const进行声明，解构中不强制。
    'prefer-const': [1,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }
    ],
    // 箭头函数只有一个参数时，允许省略圆括号
    'arrow-parens': [0, 'as-needed'],
    // 允许使用let或const为多个变量赋值
    'one-var': [0],
    // 不强制检查函数是否有返回值，但是，建议每个函数都应该有返回值。
    'no-useless-return': [1],
    // 正则表达式
    'no-useless-escape': [0],
    // 不应该存在未使用的变量声明。但是，在解构赋值中，有时候确实需要剔除一些属性，然后获取剩余属性。
    // 如：let { params, ...rest } = options；我们只需要options中除params外的属性，这时候，params可能就成了未使用的变量
    'no-unused-vars': [0],
    // 驼峰命名法****************************************************************////////////////////////////////
    camelcase: [0],
    // 多余的空行
    'no-trailing-spaces': [0],
    // 函数后的空格
    'space-before-function-paren': [2, {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    // 文件最后空一行
    'eol-last': [0],
  }
};

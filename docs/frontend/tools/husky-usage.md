# husky 使用方法

- 1.    安装 yarn add husky -D
- 2. 在 package.json 文件中添加脚本 "prepare": "husky install"
- 3. 执行命令 yarn run prepare 会自动生成一个 .husky 文件夹
- 4. 在 .husky 文件夹下新建一个文件，名为 pre-commit
  - pre-commit 文件的内容如下
  ```sh
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"

  npm run test-pre-commit
  ```

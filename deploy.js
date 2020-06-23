/**
 * User: CHT
 * Date: 2020/6/3
 * Time: 10:42
 */
const {
  cd,
  ls,
  exec
}  = require('shelljs')

cd('./docs/.vuepress/dist')

exec('git init')
exec('git add -A')
exec('git commit -m "deploy')
exec('git push -f https://github.com/caohuatao/caohuatao.github.io.git master')

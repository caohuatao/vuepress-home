/**
 * User: CHT
 * Date: 2020/6/3
 * Time: 10:42
 */
const {exec} = require('child_process')
const {resolve} = require('path')

const position = resolve(__dirname, './docs/.vuepress/dist')

function promiseExec(script) {
  return new Promise((resolve1, reject) => {
    exec(script, function (err, stdout, stderr) {
      if (err || stderr) {
        reject(err || stderr)
      } else {
        resolve1(stdout)
      }
    })
  })
}

promiseExec(`cd ${position}`)
  .then(() => promiseExec('git init'))
  .then(() => promiseExec('git add -A'))
  .then(() => promiseExec('git commit -m "deploy"'))
  .then(() => promiseExec('git push -f git@github.com:caohuatao/caohuatao.github.io.git master'))
  .catch(err => {
    console.error(err)
  })

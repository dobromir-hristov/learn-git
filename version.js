const fs = require('fs')
const pack = require('./package.json')

const readme = fs
  .readFileSync('./README.md', 'utf-8')
  .replace(
    /<small>[\d.]+.[\d]+<\/small>/,
    '<small>' + pack.version + '</small>'
  )
fs.writeFileSync('./README.md', readme)

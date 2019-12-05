const path = require('path')

const exts = {}

require('fs').readdirSync(__dirname).forEach(file => {
  if (!file.match(/\.js$/)) return
  const exportedObject = require(path.join(__dirname, file))
  const exportedName = path.basename(file, '.js')
  exts[exportedName] = exportedObject
})

module.exports = exts

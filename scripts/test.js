const sourceDir = 'E:\\oss\\better-scroll\\packages\\better-scroll\\dist\\packages\\better-scroll\\src\\*'
const os = require('os')
const { log } = require('console')
const windows = os.platform() === 'win32'

log(windows)

const targetDir = 'E:\\oss\\better-scroll\\packages\\better-scroll\\dist\\types'
const execa = require('execa')

execa.commandSync(`mv ${sourceDir} ${targetDir}`, { shell: true })

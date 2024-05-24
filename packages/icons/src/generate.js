/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const IconGenerator = require('./IconGenerator')

const inputDir = path.join(__dirname, './raw')
const outputDir = path.join(__dirname, '../lib/icons')
const generator = new IconGenerator(inputDir, outputDir)

generator.generate()

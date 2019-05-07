'use strict'

const fs = require('fs')
const xml2js = require('xml2js')
let parser = new xml2js.Parser()
const YAML = require('yaml')

class Config {
  constructor() {
    if (!Config.instance) {
      Config.instance = this
    }
    return Config.instance
  }

  getJSON() {
    fs.readFile('./configs/sinConfigJSON.json', (err, data) => {
      if (err) throw err
      else {
        let parsedData = JSON.parse(data)
        console.log('JSON', parsedData)
        return parsedData
      }
    })
  }

  getXML() {
    fs.readFile('./configs/sinConfigXML.xml', (err, data) => {
      if (err) throw err
      else {
        parser.parseString(data, (error, parsedData) => {
          if (error) throw error
          console.log('XML', parsedData)
          return parsedData
        })
      }
    })
  }

  getYAML() {
    const yFile = fs.readFileSync('./configs/sinConfigYAML.yaml', 'utf8')
    let parsedData = YAML.parse(yFile)
    console.log('YAML', parsedData)
    return parsedData
  }
}

const instance = new Config()
Object.freeze(instance)
instance.getJSON()
instance.getXML()
instance.getYAML()

fs.watch('./configs', (event, filename) => {
  if (filename && event === 'change') {
    if (filename === 'sinConfigJSON.json') instance.getJSON()
    if (filename === 'sinConfigXML.xml') instance.getXML()
    if (filename === 'sinConfigYAML.yaml') instance.getYAML()
  }
})

module.exports = instance

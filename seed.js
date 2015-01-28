// Run this to generate data.json
var fs      = require('fs')
var _       = require('underscore')
var Factory = require('rosie').Factory
var Faker   = require('Faker')
var db      = {}

// Credit http://www.paulirish.com/2009/random-hex-color-code-snippets/
function hex() {
  return Math.floor(Math.random()*16777215).toString(16)
}

// Tables
db.fellows    = []
db.monters = []



Factory.define('fellow')
  .sequence('id')
  .after(function(fellow) {
    var card = Faker.Helpers.userCard()
    _.each(card, function(value, key) {
      fellow[key] = value
    })
  })

Factory.define('monster')
  .sequence('id')
  .after(function(monster) {
    var card = Faker.Helpers.userCard()
    _.each(card, function(value, key) {
      monster[key] = value
    })
  })

// Has many relationships
// Fellows
_(10).times(function () {
  var fellow = Factory.build('fellow')
  db.fellows.push(fellow)

// Monster
_(10).times(function () {
    var monster = Factory.build('monster')
    db.monsters.push(monster)






fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

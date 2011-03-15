var vows = require('vows'),
    assert = require('assert'),
    format = require('timezone').format;

vows.describe('format').addBatch({
  'We can format': {
    topic: {
      bicentenial: new Date(Date.UTC(1976, 6, 4)),
      moonwalk: new Date(Date.UTC(1969, 6, 21, 02, 36)),
      y2k: new Date(Date.UTC(2000, 0, 1)),
    },
    'the weekday abbreviated': function (topic) {
      assert.equal(format(topic.bicentenial, "%a"), "Sun");
    },
    'the weekday abbreviated with percents front and back': function (topic) {
      assert.equal(format(topic.bicentenial, "%%a%"), "%Sun%");
      assert.equal(format(topic.bicentenial, "%%%a%%"), "%%Sun%%");
    },
    'the full weekday': function (topic) {
      assert.equal(format(topic.bicentenial, "%A"), "Sunday");
    },
    'the date': function (topic) {
      assert.equal(format(topic.bicentenial, "%d"), "04");
    },
    'the date unpadded': function (topic) {
      assert.equal(format(topic.bicentenial, "%-d"), "4");
    },
    'the single-digit date': function (topic) {
      assert.equal(format(topic.bicentenial, "%e"), "4");
    },
    'the day of the year': function (topic) {
      assert.equal(format(topic.ytk, "%j"), "001");
      assert.equal(format(topic.moonwalk, "%j"), "202");
      assert.equal(format(topic.bicentenial, "%j"), "186");
    },
    'the day of the year': function (topic) {
      assert.equal(format(topic.y2k, "%j"), "001");
      assert.equal(format(topic.moonwalk, "%j"), "202");
      assert.equal(format(topic.bicentenial, "%j"), "186");
    },
    'the day of the week starting on Monday': function (topic) {
      assert.equal(format(topic.y2k, "%u"), "6");
      assert.equal(format(topic.moonwalk, "%u"), "1");
      assert.equal(format(topic.bicentenial, "%u"), "7");
    },
    'the day of the week starting on Sunday': function (topic) {
      assert.equal(format(topic.y2k, "%w"), "6");
      assert.equal(format(topic.moonwalk, "%w"), "1");
      assert.equal(format(topic.bicentenial, "%w"), "0");
    }
  }
}).export(module);

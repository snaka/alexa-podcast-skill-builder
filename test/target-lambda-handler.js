/* eslint-disable  func-names */
'use strict'

const Adapter = require('ask-sdk-dynamodb-persistence-adapter')
const { PodcastSkillBuilder } = require('../index')
const podcastConfig = {
  skillName: 'backspace.fm プレイヤー',
  skillNameForSpeech: 'バックスペースエフエムプレイヤー',
  feedUrl: 'http://feeds.backspace.fm/backspacefm',
  tableName: process.env.PODCAST_FEED_CACHE_TABLE,
  podcastId: 'backspace.fm',
  podcastName: 'backspace.fm',
  podcastNameForSpeech: 'バックスペースエフエム',
  maxEpisodeCount: 500
}

const skillBuilder = new PodcastSkillBuilder(podcastConfig)
const dynamoDBAdapter = new Adapter.DynamoDbPersistenceAdapter({
  tableName: 'test-user-data',
  createTable: true
})

exports.handler = skillBuilder.build(dynamoDBAdapter)

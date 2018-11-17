# alexa-podcast-skill-builder

[![CircleCI](https://circleci.com/gh/snaka/alexa-podcast-skill-builder.svg?style=svg)](https://circleci.com/gh/snaka/alexa-podcast-skill-builder)

Create Podcast Skill for Alexa easily.

<img src=https://user-images.githubusercontent.com/19329/48243121-f3caad80-e421-11e8-95a0-f06881ec1a84.png>

## Usage

Implement Lambda handler like below...

```index.js
const { PodcastSkillBuilder } = require('alexa-podcast-skill-builder')

const skillBuilder = new PodcastSkillBuilder({
  skillName: 'backspace.fm プレイヤー',
  skillNameForSpeech: 'バックスペースエフエムプレイヤー',
  feedUrl: 'http://feeds.backspace.fm/backspacefm',
  tableName: 'alexa-skill-podcasts-player',
  podcastId: 'backspace.fm',
  podcastName: 'backspace.fm',
  podcastNameForSpeech: 'バックスペースエフエム',
  maxEpisodeCount: 500
})

exports.handler = skillBuilder.build(dynamoDBAdapter)
```

## Supported Intents

(TBD)

## Model

(TBD)

## Use case

<a align="left" href="https://www.amazon.co.jp/dp/B07H294SKT">
  <img src="https://i.gyazo.com/eb9dfc6204ec1eba315a83738e733bf9.png">
</a>
<a href="https://github.com/snaka/skill-backspace.fm">snaka/skill-backspace.fm</a>
<br>

<a align="left" href="https://www.amazon.co.jp/dp/B07GJSG572">
  <img src="https://i.gyazo.com/ab7444f6d2ece6a2bb745818e8a746a1.png">
</a>
<a href="https://github.com/snaka/skill-tcfm-player">snaka/skill-tcfm-player</a>
<br>

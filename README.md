# alexa-podcast-skill-builder
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


## Use case

* [snaka/skill-backspace.fm](https://github.com/snaka/skill-backspace.fm)
* [snaka/skill-tcfm-player](https://github.com/snaka/skill-tcfm-player)

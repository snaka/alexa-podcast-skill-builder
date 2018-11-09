# alexa-podcast-skill-builder
Create Podcast Skill for Alexa easily.

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



## Use case

* [snaka/skill-backspace.fm](https://github.com/snaka/skill-backspace.fm)
* [snaka/skill-tcfm-player](https://github.com/snaka/skill-tcfm-player)

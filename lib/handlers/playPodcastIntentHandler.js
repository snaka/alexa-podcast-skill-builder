let PodcastPlayer

module.exports = {
  set PodcastPlayer (clazz) {
    PodcastPlayer = clazz
  },
  get PodcastPlayer () {
    return PodcastPlayer
  },
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest' ||
      (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
        handlerInput.requestEnvelope.request.intent.name === 'PlayPodcastIntent')
  },
  async handle (handlerInput) {
    const t = handlerInput.attributesManager.getRequestAttributes().t
    const podcast = new PodcastPlayer(handlerInput)
    await podcast.play()

    const speechText = t('SPEECH_START_PLAYING_EPISODE', {
      postProcess: 'sprintf',
      sprintf: {
        podcastName: podcast.localizedName,
        episodeTitle: podcast.nowPlayingTitle
      }
    })

    return podcast.response
      .speak(speechText)
      .withSimpleCard(t('CARD_TITLE_START_PLAYING', {
        postProcess: 'sprintf',
        sprintf: {
          podcastName: podcast.name
        }
      }), speechText)
      .getResponse()
  }
}

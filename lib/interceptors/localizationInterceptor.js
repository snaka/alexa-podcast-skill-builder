const i18n = require('i18next')
const sprintf = require('i18next-sprintf-postprocessor')
const resources = require('../resources')

module.exports = {
  async process (handlerInput) {
    const locale = handlerInput.requestEnvelope.request.locale
    console.log('Requested locale:', locale)

    const attributes = handlerInput.attributesManager.getRequestAttributes()

    attributes.t = await i18n.use(sprintf).init({
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      lng: locale,
      resources
    })
  }
}

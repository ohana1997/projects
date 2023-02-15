// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion) {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })

    return knownEmotions.has(emotion)
}

async function speak(knownEmotions, newEmotion, phrase) {
    
        const hasEmotion  = await checkEmotion(knownEmotions, newEmotion)
        console.log('hasEmotion >>> ', hasEmotion)
        if (hasEmotion) {
            return `"${phrase}" (${newEmotion})`
        }
        throw new Error(`Does not compute. I do not understand ${newEmotion}.`)

}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;

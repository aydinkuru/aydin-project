const Person = require('./person')
const Photo = require('./photo')

const mihri = new Person('mihri', 35)
const steve = new Person('steve', 21)
const armagan = new Person('armagan', 36)

const berlinPhoto = new Photo('berlin.jpg')
const munichPhoto = new Photo('munich.jpg')

steve.addPhoto(berlinPhoto)
steve.addPhoto(munichPhoto)

steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

armagan.likePhoto(berlinPhoto)
mihri.likePhoto(berlinPhoto)

console.log(steve.profile)

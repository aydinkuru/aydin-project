class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.photos = []
    this.likes = []
  }

  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  addPhoto(photo) {
    this.photos.push(photo)
  }

  likePhoto(photo) {
    this.likes.push(photo)
    photo.likedBy.push(this)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}

## Photos (${this.photos.length})

${this.photos
  .map(photo => {
    return `### ${photo.filename}
    🤩 ${photo.likedBy.map(person => person.name).join(', ') || 'no likes yet!'}
    `
  })
  .join('\n')}
`
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You can't override it with ${newValue}.`)
  }
}

module.exports = Person

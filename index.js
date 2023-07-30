const Author = require("./author")

const john = new Author("Jhon Lennon")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")
const post2 = john.writePost("um titulo", "eu sou muito gostoso")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)
console.log(post2)
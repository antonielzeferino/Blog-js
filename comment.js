class Comment{
   constructor(userName, content){
      this.userName = userName
      this.content = content
      this.comentedAt = new Date()
   }
}

module.exports = Comment
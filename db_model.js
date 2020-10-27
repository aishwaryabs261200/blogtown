const mongoose = require('./db_connection');

const Schema = mongoose.Schema ;

const blogSchema = new Schema({
 
    id : Number,
    thumbnail : String ,
    title : String ,
    content : String ,
    category : String ,
    author : String ,
    date : {
        type : Date ,
        default : Date.now
    } ,
    likes : Number ,

})
var blogModel  = mongoose.model('blog_dummy' , blogSchema) ;

var blog = new blogModel({
    id : 1 ,
    thumbnail : "post.jpg" ,
    title : "Cricket" ,
    content : "abc" ,
    author : "xyz" ,
    date : Date() ,
    likes : 2 ,
})

 blog.save(function(err , doc){
             if(err)
          console.log("error while inserting") ;
         else
             console.log("inserted" + doc ) ;

 })

module.exports = blogModel ;



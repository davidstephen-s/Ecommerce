const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://David Stephen .S:Sds@269782@firstmongoapp.dgqpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection done")
}).catch((e)=>{
    console.log("something error")
})

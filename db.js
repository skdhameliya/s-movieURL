// smitdhameliya
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://adminsmit:smit@cluster0.6qawk.mongodb.net/moviesURL1", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("connection success...")).catch((error) => console.log(error))
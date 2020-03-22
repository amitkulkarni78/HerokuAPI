const app = require('./app/app');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: `./config/${process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'dev'}.env` });
console.log(process.env.NODE_ENV);
console.log(dotenv.parsed);
const PORT = dotenv.parsed.PORT || 3000;
const MONGOURI = dotenv.parsed.MONGOURL || 'mongodb://localhost:27017/recipeApp';

function ConnectMongo() {
    mongoose.connect(
        MONGOURI,
        {useNewUrlParser: true , 
         useUnifiedTopology: true 
        },(err) => {
        if(err){
            console.log(err);
        } else {
            app.listen(PORT, () => {
                console.log(`App listening on port !${PORT}`);
            });
        }
    })
};

ConnectMongo();

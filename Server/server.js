const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const loginRoutes = require('./routes/login');
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', loginRoutes);

//Database
mongoose.connect('mongodb://192.168.2.93/Localdatabase?directConnection=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connection is ready...');
        //Server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })



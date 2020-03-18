let express = require('express');
let app = express();

//set public static folder
app.use(express.static(__dirname + '/public'));

//use view engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//
app.use('/', require('./routers/indexRouter'));
app.use('/products', require('./routers/productRouter'));

app.get('/sync', (req, res) => {
    let models = require('./models');
    models.sequelize.sync()
    .then(()=>{
        res.send('abc')
    });
});

app.get('/:page',(req,res)=>{
    let banners = {
        home: 'HCMUS-20B05',
        about: 'About us',
        blog: 'Blog',
        blog_single: 'Blog Single',
        contact: 'Contact us',
        products: 'Shop Category'
    };
    let page = req.params.page;
    res.render(page,{banner: banners[page]});
});

//set server Port & Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running at port ${app.get('port')}`);
});
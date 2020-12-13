export default (express, bodyParser, fs, crypto, http, mongodb, path, cors, puppeteer) => {
    const app = express();

    app.use(bodyParser.json());
    app.use(express.urlencoded());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
        next()
    });

    app.use(cors());
    app.options('*', cors());

    app 
        .get('/test/', async (req, res) => {
            res.setHeader('content-type', 'text/plain');
            res.send("0.8862481722945399");
        })
        .get('/login/', (req, res) => res.send('itmo282167'))
        .all('*', (req, res) => {
            res.send('itmo282167');
        });


    return app;
}
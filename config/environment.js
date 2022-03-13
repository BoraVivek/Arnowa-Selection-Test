const development = {
    name: 'development',
    db : 'mongodb://localhost/arnowa',
    session_cookie_key: 'arnowa',
    port: 8000
}

const production = {
    name: 'production',
    db: process.env.ARNOWA_DB,
    session_cookie_key: process.env.ARNOWA_SESSION_KEY,
    port: process.env.PORT,
}

module.exports = eval(process.env.ARNOWA_ENVIRONMENT) == undefined ? development : eval(process.env.ARNOWA_ENVIRONMENT);
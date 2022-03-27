const { devtools } = require("vue");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
   ? '/site/'
   : '//',
   devtools : true
}

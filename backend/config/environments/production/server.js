module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://git.heroku.com/ryanmoellerfullstackrestaurant.git'),
    app: { 
      keys: env.array('820e9b666f58682a')
    },
  })
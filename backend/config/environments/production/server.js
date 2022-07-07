module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://ryanmoellerfullstackrestaurant.herokuapp.com/'),
    app: { 
      keys: env.array('820e9b666f58682a')
    },
  })
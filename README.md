# REST API TEMPLATE
### A Simple RESTapi Template using expressjs

### Features:
> Endpoint logging in console
> all routes in seprate [route](/routes) folder
> Error Handler for internal server errors, so no crash
> Website support with [EJS](https://ejs.co/)
> Premade List Home page with list of all endpoints (Dynamic)
> Security with [helmet](https://npmjs.com/package/helmet)
> Beautiful JSON 
### Endpoint Examples:
> JSON Endpoint
s```js
module.exports = {
  route: '/yhello,
  run: async (req, res) => {
    res.json({
      hello: 'world'
    })
  }
}

//usage: https://yoursite.com/hello```

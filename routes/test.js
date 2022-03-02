module.exports = {
  route: '/test',
  run: async (req, res) => {
    res.json({
      hello: 'world'
    })
  }
}
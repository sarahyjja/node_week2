const router = (req, res) => {
  if(req.url == '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.end()
  }
}

module.exports = router

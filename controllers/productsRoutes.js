module.exports = (app) => {
  app.get('/stores/products', (req, res) => {
    res.send(res.json())
      .then(stores => this.setState({ stores }));
  });
};

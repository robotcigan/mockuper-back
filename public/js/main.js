var app = new Vue({
  el: '#app',
  data: {
    some: 'Fuck eyah!!!',
    mockups: []
    // mockups: [
    //   {
    //     shortName: 'Some',
    //     img: './img/1.jpg'
    //   },
    //   {
    //     shortName: 'Another',
    //     img: './img/2.jpg'
    //   },
    //   {
    //     shortName: 'Another',
    //     img: './img/3.jpg'
    //   }
    // ]
  },
  computed: {
    getMockups: function() {
      var that = this;
      axios.get('http://localhost:1337/api/v1/mockups')
        .then(function(res) {
          that.mockups = res.data.mockups;
          // console.log(res.data)
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
});

app.getMockups;
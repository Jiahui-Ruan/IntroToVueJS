new Vue({
  el: '#exercise',
  data: {
    firstClass: {
      highlight: true,
      shrink: false
    },
    secondClass: 'highlight',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '100px',
      backgroundColor: 'yellow'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.firstClass.highlight = !vm.firstClass.highlight;
        vm.firstClass.shrink = !vm.firstClass.shrink;
      }, 1000)
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});

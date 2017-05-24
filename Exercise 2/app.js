new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMe: function() {
                alert('alertMe!');
            },
            updateNow: function(event) {
                this.value = event.target.value;
            }
        }
    });
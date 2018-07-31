new Vue({
    el: '#gameView',
    data: function(){
        return {
            loading: true,
            rawData: null
        };
    },
    mounted: function(){
        axios
            .get('https://api.myjson.com/bins/z2fgy')
            .then(response => (this.rawData = response.data))
            .finally(() => {
                this.loading = false;
        })
    },
});


//https://api.myjson.com/bins/z2fgy
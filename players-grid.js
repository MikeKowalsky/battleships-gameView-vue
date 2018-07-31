Vue.component('players-grid', {
    props: ['oponent'],
    data () {
        return {
            vertical: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
            horizontal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    },
    mounted (){
        console.log('players-grid mounted');
//        console.log(this.oponent);
    },
    template:`
        <table class="playersGrid">
            <tr>
                <td
                    v-for="name in vertical"
                    :key="name"
                    class="bold bcg"
                >{{name}}
                </td>
            </tr>
            <grid-row
                v-for="rowNumber in horizontal"
                :rowNumber="rowNumber"
                :vertical="vertical"
                :oponent="oponent"
                :key="rowNumber"
            />
        </table>
    `
});


//@hook:mounted="countRow"
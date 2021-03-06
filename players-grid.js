Vue.component('players-grid', {
    data () {
        return {
            vertical: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            horizontal: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
        };
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
                :key="rowNumber"
            />
        </table>
    `
});


//@hook:mounted="countRow"
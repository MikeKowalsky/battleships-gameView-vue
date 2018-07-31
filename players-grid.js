Vue.component('players-grid', {
//    props: ['shipArray'],
    data () {
        return {
            vertical: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
            horizontal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//            rowCounter: 0,
//            isPlayersGridReady: false
        };
    },
//    methods: {
//        countRow: function (){
//            this.rowCounter++;
//            console.log('in countRow, rowCounter is ' + this.rowCounter);
//            if(this.rowCounter == 10){
//                this.showShips();
//            }
//        },
//        showShips: function (){
//            console.log('in showShips');
//            console.log(this.shipsArray);
//            
//            this.shipsArray.forEach((ship) => {
//               ship.locations.forEach((loco) => {
//                   console.log(loco);
//                   let cell = document.querySelector('#D5');
//                   console.log(cell);
//                   cell.classList.add('ship');
//               });
//            });
//            
//        },
//    },
    mounted (){
        console.log('players-grid mounted');
//        this.showShips();
    },
//    updated (){
//        console.log('players-grid updated');
//        this.showShips();
//    },
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
Vue.component('grid-row', {
    props: ['vertical', 'rowNumber', 'oponent'],
    data (){
        return{
            idsArray: [],
        };
    },
    mounted (){
        this.createIds();
//        console.log('grid-row mounted');
    },
    methods: {
        createIds: function (){
            for(let i=0; i<this.vertical.length; i++){
//                console.log(this.oponent);
//                if(this.oponent){
////                    let newId = `s${ this.vertical[i] }${ this.rowNumber }`;
//                    let newId = "s" + this.vertical[i] + this.rowNumber;
//                    console.log(newId);
//                } else {
//                    let newId = this.vertical[i] + this.rowNumber;
//                    console.log(newId);
//                }
                let newId = this.vertical[i] + this.rowNumber;
                this.idsArray.push(newId);
            }
//            console.log(this.idsArray);
        }
    },
    template:`
        <tr>
            <td
                v-for="(id, index) in idsArray"
                :key="id"
                :id="id"
                :class="{ bcg: index == 0 }"
            >
                <p v-if="index == 0"> {{ id }} </p>
            </td>
        </tr>
    ` 
});
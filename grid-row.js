Vue.component('grid-row', {
    props: ['vertical', 'rowNumber'],
    data (){
        return{
            idsArray: [],
        };
    },
    mounted (){
        this.createIds();
    },
    methods: {
        createIds: function (){
            for(let i=0; i<this.vertical.length; i++){
                let newId = this.rowNumber + this.vertical[i];
                this.idsArray.push(newId);
            }
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
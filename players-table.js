Vue.component('players-table', {
    props: {
        my_data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            playerOne: {
                id: null,
                email: this.my_data.loggedInName
            },
            isPlayerTwo: true,
            playerTwo: null,
            normalDate: null,
            shipsArray: this.my_data.ships,
            salvoesArray: this.my_data.salvoes,
            hitsArray: this.my_data.hAS
        };
    },
    mounted (){
        console.log(this.my_data);
        this.playersData();
        this.changeDate();
    },
    methods: {
        playersData: function (){
            if(this.my_data.gamePlayers[0].player.email == this.playerOne.email){
                this.playerOne.id = this.my_data.gamePlayers[0].player.id;
                this.playerTwo = this.my_data.gamePlayers[1].player.email;
            } else if(!isPlayerTwo){
                //when second player is not available
            } else {
                this.playerTwo = this.my_data.gamePlayers[0].player.email;
//                this.isPlayerTwo = true;
            }
        },
        changeDate: function (){
            tempDate = new Date(this.my_data.created);
            this.normalDate = tempDate.toLocaleString();
        },
        showShips: function (){
            this.shipsArray.forEach((ship) => {
               ship.locations.forEach((loco) => {
                    let cell = document.querySelector(`#${ loco }`);
                    cell.classList.add('ship');
                    let newPar = document.createElement('p');
                    newPar.append(`${ ship.shipType.slice(0,2).toUpperCase() }`);
                    cell.append(newPar);
               });
            });
        },
        showSalvoes: function(){
            let oponentGrid = document.querySelector('#oponentGrid');
            let playerGrid = document.querySelector('#playerGrid');
            
            this.salvoesArray.forEach((salvo) => {
                if(salvo.playerId == this.playerOne.id){
                    salvo.locations.forEach((loco) => {
                        let cell = oponentGrid.querySelector('#' + loco);
                        cell.classList.add('salvo');
                        let newPar = document.createElement('p');
                        newPar.append(`${ salvo.turnNo }`);
                        cell.append(newPar);
                    });
                } else {
                    salvo.locations.forEach((loco) => {
                        let cell = playerGrid.querySelector('#' + loco);
                        if(cell.classList.contains('ship')){
                            cell.classList.add('hit');
                        } else {
                            cell.classList.add('salvo');
                        }
                    });
                }
            });
        },
        showHitsAndSinks: function(){
            let oponentGrid = document.querySelector('#oponentGrid');
            let playerGrid = document.querySelector('#playerGrid');
            
            this.hitsArray.forEach((round) => {
                for(shipType in round.hitsOnEnemy){
                    if(round.hitsOnEnemy[shipType].hits.length > 0){
                        round.hitsOnEnemy[shipType].hits.forEach((loco) => {
                            let cell = oponentGrid.querySelector('#' + loco);
                            cell.classList.add('hit');
                            if(round.hitsOnEnemy[shipType].isSink){
                                cell.classList.add('sink');
                            }
                        });
                    }
                }
                for(shipType in round.hitsOnPlayer){
                    if(round.hitsOnPlayer[shipType].isSink){
                        round.hitsOnPlayer[shipType].hits.forEach((loco) => {
                            let cell = playerGrid.querySelector('#' + loco);
                            cell.classList.add('sink');
                        });
                    }
                }
            });
        }
    },
    updated (){
        this.showShips();
        this.showSalvoes();
        this.showHitsAndSinks();
    },
    template: `
        <div>
            <p class="bold">Welcome again {{playerOne.email}}</p>

            <table class="statusTable">
                <tr>
                    <td colspan="2">Game no. {{this.my_data.gameId}}</td>
                    <td colspan="5">Created: {{this.normalDate}}</td>
                </tr>
                <tr>
                    <td colspan="7">You vs {{playerTwo}}</td>
                </tr>
            </table>

            <p class="bold marg-top">Grids</p>
            <div class="twoGrids">
                <div>
                    <p>You: {{ playerOne.email }}</p>
                    <players-grid id="playerGrid" />
                </div>
                <div>
                    <p>Oponent: {{ playerTwo }}</p>
                    <players-grid id="oponentGrid" />
                </div>
            </div>
        </div>
    `
});

// @hook:mounted="showShips"
//<players-grid :shipArray="this.my_data.ships" />
///<reference path="typings/vue/vue.d.ts" />

///<reference path="model/game.ts" />
///<reference path="model/player.ts" />
///<reference path="model/ship.ts" />

///<reference path="model/ships/battleship.ts" />
///<reference path="model/ships/carrier.ts" />
///<reference path="model/ships/destroyer.ts" />
///<reference path="model/ships/patrolboat.ts" />
///<reference path="model/ships/submarine.ts" />

///<reference path="components/header.ts" />
///<reference path="components/content.ts" />
///<reference path="components/board.ts" />
///<reference path="components/row.ts" />
///<reference path="components/tile.ts" />
///<reference path="components/hud.ts" />
///<reference path="components/startscreen.ts" />
///<reference path="components/gameover.ts" />

class App {
	private mGame: Game;
	private mCurrentGame: Game;
	public static component: any;

	public constructor() {
		var self = this;		
		this.init();
		App.component = new Vue({
			el: "#entry",
			data: App.data,
			template: '<content :kills="kills" :msg="msg" :turn="turn" :phase="phase" :hits="hits" :misses="misses" :selected="selected" :games="games"></content>',
		});


		// Handle events here, waterfall changes downward
		App.component.$on('selected', function(payload) {
			this.selected.x = payload.x;
			this.selected.y = payload.y;
		});

		App.component.$on('fire', function(payload:Coordinate) {
			var currentTurn = self.mGame.CurrentTurn;
			if (payload.x === -1 && payload.y === -1)
				return;
			var result = self.mCurrentGame.Fire(payload);
			if(self.mCurrentGame.Phase === GamePhase.END) {
				this.phase = GamePhase.END;
				// end game here.
				return;
			} 
			this.hits = self.mGame.Hits[currentTurn];
			this.misses = self.mGame.Misses[currentTurn];
			this.kills = self.mGame.OtherPlayer().Ships.filter(ship => {
				return ship.Sunk;
			}).map((ship) => {
				return ship.Name.toUpperCase();
			});			

			this.selected.x = -1;
			this.selected.y = -1;	
			this.phase = GamePhase.WAITING;		
		});

		App.component.$on('sunk', function(msg:string) {
			this.msg = 'YOU SUNK MY ' + msg.toUpperCase() + ' !';
		});

		App.component.$on('nextTurn', function() {
			this.msg = '';
			self.mGame.NextTurn();
			this.turn = self.mGame.CurrentTurn;
			this.kills = self.mGame.OtherPlayer().Ships.filter(ship => {
				return ship.Sunk;
			}).map((ship) => {
				return ship.Name.toUpperCase();
			});

			this.hits = self.mGame.Hits[this.turn];
			this.misses = self.mGame.Misses[this.turn];			
			this.phase = GamePhase.MAIN;			
		});

		App.component.$on('newGame', function() {
			// Clear all Vue-bound data and re-start game
			self.init();
			this.turn = self.mGame.CurrentTurn;
			this.selected.x = -1;
			this.selected.y = -1;			
			this.hits = [];
			this.misses = [];			
			this.kills = [];
			this.phase = GamePhase.MAIN;
		});
	}
	public static data = {
		games: [],
		selected: { x: -1, y: -1 },
		hits: [],
		misses: [],
		phase: GamePhase.START,
		turn: 0,
		msg: '',
		kills: []
	}
	private init() {
		this.mGame = new Game();
		this.mGame.Load();
		this.mCurrentGame = this.mGame;
		App.data.games.push(this.mGame);
	}

	public get CurrentGame() {
		return this.mCurrentGame;
	}
}

var app = new App();

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
			template: '<content :turn="turn" :phase="phase" :hits="hits" :misses="misses" :selected="selected" :games="games"></content>',
		});

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
				// end game here.
				return;
			} 
			this.hits = self.mGame.Hits[currentTurn];
			this.misses = self.mGame.Misses[currentTurn];

			this.selected.x = -1;
			this.selected.y = -1;	
			this.phase = GamePhase.WAITING;		
		});

		App.component.$on('nextTurn', function() {
			self.mGame.NextTurn();
			this.turn = self.mGame.CurrentTurn;
			this.hits = self.mGame.Hits[this.turn];
			this.misses = self.mGame.Misses[this.turn];			
			this.phase = GamePhase.MAIN;			
		});
	}
	public static data = {
		games: [],
		selected: { x: -1, y: -1 },
		hits: [],
		misses: [],
		phase: 0,
		turn: 0
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

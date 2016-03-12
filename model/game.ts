/**
 * Game: handles game state, 
 */
enum GamePhase {
	START,
	MAIN,
	WAITING,
	END
}

enum Projectile {
	HIT,
	MISS
}

interface Coordinate {
	x: number,
	y: number
}

class Game {
	public static GRID_SIZE:number = 10;
	private mPlayers: Array<Player> = [];
	private mCurrentTurn: number = 0;	
	private mWaiting
	private mPhase: GamePhase = GamePhase.START;
	private mTurnToPlayerMap = {};
	private mHits = { 0: [], 1: [] };
	private mMisses = { 0: [], 1: [] };	

	public constructor() {
	}

	public get Hits() {
		return this.mHits;
	}

	public get Misses() {
		return this.mMisses;
	}

	public get Players() {
		return this.mPlayers;
	}

	public Load():void {
		var player1 = new Player();
		this.mPlayers.push(player1);

		var player2 = new Player();
		this.mPlayers.push(player2);
		this.StartGame();
	}

	public NextTurn(): void {
		this.mCurrentTurn = this.mCurrentTurn === 0 ? 1 : 0;
	}

	public get Phase() {
		return this.mPhase;
	}

	public StartGame() {
		this.mPhase = GamePhase.MAIN;
		this.PlaceShips();
	}

	public set Phase(phase: GamePhase) {
		this.mPhase = phase;
	}	

	public Fire(coord:Coordinate):void{
		if (coord.x === -1 && coord.y === -1)
			return;

		if (this.OtherPlayer().ReceiveProjectile(coord)) {
			this.mHits[this.mCurrentTurn].push(coord);
		}
		else {
			this.mMisses[this.mCurrentTurn].push(coord);			
		}
		if (this.OtherPlayer().IsDead())
 			this.EndGame();
	}

	private EndGame(): void {
		this.mPhase = GamePhase.END;
	}

	public PlaceShips(): void {
		this.mPlayers.forEach(player => {
			var b = new Battleship();
			player.Ships.push(b);
			b.Place(player.Board);

			var c = new Carrier();
			player.Ships.push(c);			
			c.Place(player.Board);

			var d = new Destroyer();
			player.Ships.push(d);			
			d.Place(player.Board);

			var p = new PatrolBoat();
			player.Ships.push(p);			
			p.Place(player.Board);

			var s = new Submarine();
			player.Ships.push(s);			
			s.Place(player.Board);
		});
	}

	public OtherPlayer():Player {
		return this.mCurrentTurn === 0 ? this.mPlayers[1] : this.mPlayers[0];
	}

	public get CurrentTurn() {
		return this.mCurrentTurn;
	}

}


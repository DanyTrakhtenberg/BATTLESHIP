class Player {
	private mName:string = '';
	private mWins:number = 0;
	private mShips: Array<Ship> = [];
	private mBoard = {};

	public constructor() {
	}

	public IsDead():boolean {
		if (this.mShips.length === 0)
			return true;
		return false;
	}

	public ReceiveProjectile(coord:Coordinate):boolean {
		var hit = false;
		if (this.mShips.some(ship => {
			return ship.HitTest(coord);
		}))
			hit = true;


		// Remove ships from collection if they have
		// been sunk
		this.mShips = this.mShips.filter(ship => {
			return !ship.Sunk;
		});

		if (hit)
			return true;
		return false;
	}

	public get Ships():Array<Ship> {
		return this.mShips;
	}

	public set Ships(ships: Array<Ship>) {
		this.mShips = ships;
	}

	public get Board() {
		return this.mBoard;
	}
}
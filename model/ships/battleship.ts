class Battleship extends Ship {
	private SIZE_INT = 4;
	public constructor() {
		super();
		this.ShipType = ShipType.BATTLESHIP;
		this.mSize = this.SIZE_INT;
		this.mName = 'battleship';
	}
}
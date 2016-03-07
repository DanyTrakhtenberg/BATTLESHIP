class Submarine extends Ship {
	private SIZE_INT = 3;
	public constructor () {
		super();
		this.ShipType = ShipType.SUBMARINE;		
		this.mSize = this.SIZE_INT;
		this.mName = 'submarine';
	}
}


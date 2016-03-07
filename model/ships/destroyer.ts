class Destroyer extends Ship {
	private SIZE_INT = 3;
	public constructor() {
		super();
		this.ShipType = ShipType.DESTROYER;
		this.mSize = this.SIZE_INT;
		this.mName = 'destroyer';
	}
}
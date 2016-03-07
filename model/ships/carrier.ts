class Carrier extends Ship{
	private SIZE_INT = 5;
	public constructor() {
		super();
		this.ShipType = ShipType.CARRIER;
		this.mSize = this.SIZE_INT;
		this.mName = 'carrier';
	}
}
class PatrolBoat extends Ship {
	private SIZE_INT = 2;
	public constructor() {
		super();
		this.ShipType = ShipType.PATROLBOAT;
		this.mSize = this.SIZE_INT;
		this.mName = 'patrol boat';		
	}
}
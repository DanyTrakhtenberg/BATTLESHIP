var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PatrolBoat = (function (_super) {
    __extends(PatrolBoat, _super);
    function PatrolBoat() {
        _super.call(this);
        this.SIZE_INT = 2;
        this.ShipType = ShipType.PATROLBOAT;
        this.mSize = this.SIZE_INT;
        this.mName = 'patrol boat';
    }
    return PatrolBoat;
})(Ship);

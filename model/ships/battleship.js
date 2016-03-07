var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Battleship = (function (_super) {
    __extends(Battleship, _super);
    function Battleship() {
        _super.call(this);
        this.SIZE_INT = 4;
        this.ShipType = ShipType.BATTLESHIP;
        this.mSize = this.SIZE_INT;
        this.mName = 'battleship';
    }
    return Battleship;
})(Ship);

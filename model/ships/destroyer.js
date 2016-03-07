var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Destroyer = (function (_super) {
    __extends(Destroyer, _super);
    function Destroyer() {
        _super.call(this);
        this.SIZE_INT = 3;
        this.ShipType = ShipType.DESTROYER;
        this.mSize = this.SIZE_INT;
        this.mName = 'destroyer';
    }
    return Destroyer;
})(Ship);

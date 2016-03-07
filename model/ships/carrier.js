var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Carrier = (function (_super) {
    __extends(Carrier, _super);
    function Carrier() {
        _super.call(this);
        this.SIZE_INT = 5;
        this.ShipType = ShipType.CARRIER;
        this.mSize = this.SIZE_INT;
        this.mName = 'carrier';
    }
    return Carrier;
})(Ship);

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Submarine = (function (_super) {
    __extends(Submarine, _super);
    function Submarine() {
        _super.call(this);
        this.SIZE_INT = 3;
        this.ShipType = ShipType.SUBMARINE;
        this.mSize = this.SIZE_INT;
        this.mName = 'submarine';
    }
    return Submarine;
})(Ship);

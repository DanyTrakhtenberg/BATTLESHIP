var Player = (function () {
    function Player() {
        this.mName = '';
        this.mWins = 0;
        this.mShips = [];
        this.mBoard = {};
    }
    Player.prototype.IsDead = function () {
        if (this.mShips.length === 0)
            return true;
        return false;
    };
    Player.prototype.ReceiveProjectile = function (coord) {
        var hit = false;
        if (this.mShips.some(function (ship) {
            return ship.HitTest(coord);
        }))
            hit = true;
        // Remove ships from collection if they have
        // been sunk
        this.mShips = this.mShips.filter(function (ship) {
            return !ship.Sunk;
        });
        if (hit)
            return true;
        return false;
    };
    Object.defineProperty(Player.prototype, "Ships", {
        get: function () {
            return this.mShips;
        },
        set: function (ships) {
            this.mShips = ships;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "Board", {
        get: function () {
            return this.mBoard;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
})();

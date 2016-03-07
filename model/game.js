/**
 * Game: handles game state,
 */
var GamePhase;
(function (GamePhase) {
    GamePhase[GamePhase["START"] = 0] = "START";
    GamePhase[GamePhase["MAIN"] = 1] = "MAIN";
    GamePhase[GamePhase["END"] = 2] = "END";
})(GamePhase || (GamePhase = {}));
var Projectile;
(function (Projectile) {
    Projectile[Projectile["HIT"] = 0] = "HIT";
    Projectile[Projectile["MISS"] = 1] = "MISS";
})(Projectile || (Projectile = {}));
var Game = (function () {
    function Game() {
        this.mPlayers = [];
        this.mCurrentTurn = 0;
        this.mPhase = GamePhase.START;
        this.mTurnToPlayerMap = {};
        this.mHits = { 0: [], 1: [] };
        this.mMisses = { 0: [], 1: [] };
    }
    Object.defineProperty(Game.prototype, "Hits", {
        get: function () {
            return this.mHits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "Misses", {
        get: function () {
            return this.mMisses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "Players", {
        get: function () {
            return this.mPlayers;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.Load = function () {
        // Do this later if there's time. *serialization*		
        // if (localStorage.getItem('battleship-game') === null)
        // 	return;
        // var jsonObj = JSON.parse(localStorage.getItem('battleship-game'));
        // 
        // 
        // 
        var player1 = new Player();
        this.mPlayers.push(player1);
        var player2 = new Player();
        this.mPlayers.push(player2);
        this.StartGame();
    };
    Game.prototype.NextTurn = function () {
        this.mCurrentTurn = this.mCurrentTurn === 0 ? 1 : 0;
    };
    Object.defineProperty(Game.prototype, "Phase", {
        get: function () {
            return this.mPhase;
        },
        set: function (phase) {
            this.mPhase = phase;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.StartGame = function () {
        this.mPhase = GamePhase.MAIN;
        this.PlaceShips();
    };
    Game.prototype.Fire = function (coord) {
        console.log(this.mHits);
        if (this.OtherPlayer().ReceiveProjectile(coord)) {
            this.mHits[this.mCurrentTurn].push(coord);
        }
        else {
            this.mMisses[this.mCurrentTurn].push(coord);
        }
        if (this.OtherPlayer().IsDead())
            this.EndGame();
        else
            this.NextTurn();
        // Check if projectile hit other player's ship!
    };
    Game.prototype.EndGame = function () {
        this.mPhase = GamePhase.END;
    };
    Game.prototype.PlaceShips = function () {
        this.mPlayers.forEach(function (player) {
            var b = new Battleship();
            player.Ships.push(b);
            b.Place(player.Board);
            var c = new Carrier();
            player.Ships.push(c);
            c.Place(player.Board);
            var d = new Destroyer();
            player.Ships.push(d);
            d.Place(player.Board);
            var p = new PatrolBoat();
            player.Ships.push(p);
            p.Place(player.Board);
            var s = new Submarine();
            player.Ships.push(s);
            s.Place(player.Board);
        });
    };
    Game.prototype.OtherPlayer = function () {
        return this.mCurrentTurn === 0 ? this.mPlayers[1] : this.mPlayers[0];
    };
    Object.defineProperty(Game.prototype, "CurrentTurn", {
        get: function () {
            return this.mCurrentTurn;
        },
        enumerable: true,
        configurable: true
    });
    Game.GRID_SIZE = 10;
    return Game;
})();

var ShipType;
(function (ShipType) {
    ShipType[ShipType["BATTLESHIP"] = 0] = "BATTLESHIP";
    ShipType[ShipType["CARRIER"] = 1] = "CARRIER";
    ShipType[ShipType["DESTROYER"] = 2] = "DESTROYER";
    ShipType[ShipType["PATROLBOAT"] = 3] = "PATROLBOAT";
    ShipType[ShipType["SUBMARINE"] = 4] = "SUBMARINE";
})(ShipType || (ShipType = {}));
var Ship = (function () {
    function Ship() {
        this.mCoordinates = [];
        this.mSunk = false;
    }
    Ship.prototype.HitTest = function (_coord) {
        var hitIndex = -1;
        this.mCoordinates.some(function (coord, index) {
            if (coord.x === _coord.x && coord.y === _coord.y) {
                hitIndex = index;
                return true;
            }
            return false;
        });
        if (hitIndex !== -1) {
            // Remove coord from array, if there's a hit.
            this.mCoordinates.splice(hitIndex, 1);
            // If ship has no coords left, it is sunk!
            if (this.mCoordinates.length === 0) {
                console.log('You sunk my ' + this.mName + '!');
                this.mSunk = true;
            }
            return true;
        }
        return false;
    };
    Object.defineProperty(Ship.prototype, "Sunk", {
        get: function () {
            return this.mSunk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "ShipType", {
        get: function () {
            return this.mType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "Coordinates", {
        get: function () {
            return this.mCoordinates;
        },
        enumerable: true,
        configurable: true
    });
    Ship.prototype.Place = function (coordMap) {
        var placed = false;
        var startCoords = { x: undefined, y: undefined };
        var endCoords = { x: undefined, y: undefined };
        while (true) {
            try {
                var hit = false;
                // Generate random seed from 1 to grid size for X starting point
                var startPosX = Math.floor(Math.random() * (Game.GRID_SIZE)) + 1;
                var startPosY = Math.floor(Math.random() * (Game.GRID_SIZE)) + 1;
                // If both x and y trajectories will overflow the board, try again.
                if (startPosX + this.mSize > Game.GRID_SIZE && startPosY + this.mSize > Game.GRID_SIZE)
                    continue;
                // Try placement horizontally.
                for (var i = startPosX; i < startPosX + this.mSize; i++) {
                    if (coordMap[i.toString() + ',' + startPosY.toString()] !== undefined)
                        hit = true;
                }
                // Try placement vertically.
                for (var j = startPosX; j < startPosX + this.mSize; j++) {
                    if (coordMap[startPosX.toString() + ',' + j.toString()] !== undefined)
                        hit = true;
                }
                // If you hit another ship in either direction, try again.
                if (hit)
                    continue;
                // If we don't overflow horizontally, place it!
                if (startPosX + this.mSize <= Game.GRID_SIZE) {
                    for (var c = startPosX; c < startPosX + this.mSize; c++) {
                        coordMap[c.toString() + ',' + startPosY.toString()] = true;
                        this.mCoordinates.push({ x: c, y: startPosY });
                    }
                    break;
                }
                // If we don't overflow vertically, place it! 
                if (startPosY + this.mSize <= Game.GRID_SIZE && !placed) {
                    for (var c = startPosY; c < startPosY + this.mSize; c++) {
                        coordMap[startPosX.toString() + ',' + c.toString()] = true;
                        this.mCoordinates.push({ x: startPosX, y: c });
                    }
                    break;
                }
            }
            // JUST in case something happens... break the while loop			
            catch (ex) {
                console.log('Something is very wrong.');
                placed = true;
            }
        }
    };
    return Ship;
})();

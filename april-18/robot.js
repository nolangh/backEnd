/* ------------------------- ANCHOR Robot class work ------------------------ */
const EventEmitter = require("events");

class Robot extends EventEmitter {
	constructor(name) {
		super();
		this.name = name;
		this.active = false;
		this.once("activate", () => {
			this.activate = true;
		});

		this.on("speak", (message) => {
			if (this.active) {
				console.log(`${this.name}: ${message}`);
			}
		});
	}
}

const robot = new Robot("Hank");

robot.emit("speak", "hello");

/* ---------------------- ANCHOR moved this to plant.js --------------------- */

class Plant extends EventEmitter {
	constructor(size, hasBeenPlanted) {
		super();
		this.size = 0;
		this.hasBeenPlanted = false;
		this.once("plantSeed", () => {
			this.size = 1;
			this.hasBeenPlanted = true
		});
		this.on('water', () => {
			if (this.hasBeenPlanted){
				this.size ++ 1;
				console.log(`the plant size is ${this.size}`)
			}else{
				console.log('Please plant seed')
			}
		});
		this.on('bugAttack', () => {
			if(this.hasBeenPlanted){
				this.size -- 1;
				console.log(`the PLant size is ${this.size}`) //NOTE change "--" to "-" if it is not incrementing correctly
			}
		})
	}
}

const plant = new Plant()

plant.emit('plantSeed');
plant.emit('water');
plant.emit('harvest')
plant.emit('bugAttack')
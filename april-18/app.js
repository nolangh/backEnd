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

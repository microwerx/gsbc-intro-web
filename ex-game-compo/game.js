
// Define constants for the buttons
let START_BUTTON = 1
let LEFT_BUTTON = 2
let RIGHT_BUTTON = 3
let DOWN_BUTTON = 4
let UP_BUTTON = 5
let ACTION_BUTTON = 6

// Configure callbacks
let startButton = document.getElementById('startButton')

class Actor
{
    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {string} styleString
     */
    constructor(x, y, width, height, styleString) {
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.styleString = styleString
    }

    /**
     *
     * @param {CanvasRenderingContext2D} graphics
     */
    draw(graphics) {
        graphics.fillStyle = this.styleString
        graphics.fillRect(this.x, this.y, this.w, this.h)
    }
}

class Game
{
    /**
     *
     * @param {string} screenId the id of the element which should store the canvas
     * @param {string} controlsId the id of the element which has the buttons
     */
	constructor(screenId, controlsId) {
		this.screen = document.getElementById(screenId)
		this.controls = document.getElementById(controlsId)

        this.width = 640
        this.height = 360

		this.canvas = document.createElement('canvas')
        this.canvas.width = this.width
        this.canvas.height = this.height
        this.screen.appendChild(this.canvas)

        /**
         * @member {CanvasRenderingContext2D} graphics
         */
        this.graphics = this.canvas.getContext('2d')

        this.player = new Actor(50, 50, 50, 50, 'green')
	}

    /**
     *
     * @param {CanvasRenderingContext2D} graphics
     */
    draw(graphics) {
        // clear the screen
        graphics.fillStyle = 'red'
        graphics.fillRect(0, 0, this.width, this.height)

        graphics.strokeText('A Game', 0, 10)

        this.player.draw(graphics)
    }

    /**
     *
     * @param {number} dx
     * @param {number} dy
     */
    move(dx, dy) {
        this.player.x += dx
        this.player.y += dy
    }

    /**
     *
     * @param {number} timestamp absolute time in seconds since the app started
     */
	mainloop(timestamp) {
        let self = this
        self.draw(self.graphics)
		window.requestAnimationFrame(self.mainloop)
	}
}

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

let game = new Game('gameScreen', 'gameControls')
game.mainloop()

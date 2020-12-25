// https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API

class GamePad {

    constructor(callback) {
        this._callback = callback;
        this._connected = false;
        this._controllers = {};  // TODO, now only suports one
        this._controller = null;
        this.debug = true;

        window.addEventListener("gamepadconnected", (e) => {
            // console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            //   e.gamepad.index, e.gamepad.id,
            //   e.gamepad.buttons.length, e.gamepad.axes.length);
            this._connected = true;
            this._addgamepad(e.gamepad);
        });

        window.addEventListener("gamepaddisconnected", (e) => {
            delete this._controllers[e.gamepad.index];
            this._connected = false;
        });
    }

    _addgamepad(gamepad) {
        this._controllers[gamepad.index] = gamepad;
        this._controller = gamepad;
        // requestAnimationFrame(updateStatus);
    }

    is_connected() {
        return this._connected;
    }

    buttons(){
        let buttons = [];
        if (gamepad._controller){
            for (let b of this._controller.buttons){
                buttons.push(b.value);
            }
        }
        return buttons;
    }

    axes(){
        if (gamepad._controller)
            return this._controller.axes;
        return [];
    }
}

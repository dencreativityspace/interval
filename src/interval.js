/** Wrapper form Intervals that makes possible to control their flow.
 *
 * @constructor
 *
 * @param {object} [param={}]
 * @param {function} [param.callback=() => {}] Callback that gets executed in repetition.
 * @param {number} [param.ms=1000] Milliseconds on how often to execute the code.
 * @param {boolean} [param.start=true] If true, the interval start at the creation of the object.
 *
 * @throws Will throw an error if `callback` is not a function.
 * @throws Will throw an error if `ms` is less or equal than 0.
 *
 * @version 1.2.1
 *
 * @author Gennaro Landolfi <gennarolandolfi@codedwork.it>
 */
function Interval({callback = () => {}, ms = 1000, start = true} = {}) {
    const that = this;

    /**
     * Checks if a callback is a valid function.
     *
     * @param {function} callback Callback to be checked.
     *
     * @returns {boolean}
     *
     * @throws Will throw an error if the given callback isn't a valid function.
     */
    function isFunction(callback) {
        if (typeof callback === 'function') {
            return true;
        }

        throw new Error('Callback must be a function.');
    }

    /**
     * Checks a given value is a valid time value.
     *
     * @param {number|string} ms Time in milliseconds to be checked.
     *
     * @returns {number}
     *
     * @throws Will throw an error if the given time is too low.
     */
    function checkTime(ms) {
        if (ms == null) {
            ms = 0;
        }

        if (typeof ms === 'string') {
            ms = parseInt(ms, 10);
        }

        if (ms && ms <= 0) {
            throw new Error('Wrong repetition delay.');
        }

        return ms;
    }

    /**
     * Native interval ID.
     *
     * @type {number|null}
     */
    let interval = null;

    /**
     * Current status of the execution. If true, the interval is in repetition.
     *
     * @type {boolean}
     */
    let status = false;

    /**
     * Cache of the old data.
     *
     * @type {{ms: number|null, callback: function|null}}
     */
    let last = {
        callback: null,
        ms: null
    };

    isFunction(callback);

    last = {
        callback: callback,
        ms: checkTime(ms)
    };

    if (start) {
        that.startInterval(last);
    }

    /**
     * Starts the interval if paused.
     *
     * @param {function} callback
     * @param {number} [ms = 1000]
     *
     * @returns {Interval}
     */
    that.startInterval = ({callback = () => {}, ms = 1000} = {}) => {
        last.ms = checkTime(ms);

        if (isFunction(callback)) {
            last.callback = callback;
        }

        if (!status || interval === null) {
            interval = setInterval(last.callback, last.ms);
            status = true;
        }

        return this;
    };

    /**
     * Pauses the interval and executes a callback if provided.
     *
     * @param {function} callback
     *
     * @returns {Interval}
     */
    that.stopInterval = ({callback = () => {}} = {}) => {
        if (status && interval !== null) {
            clearInterval(interval);
            status = false;
        }

        if (typeof callback === 'function') {
            callback();
        }

        return this;
    };

    /**
     * Deletes the interval executes a callback if provided.
     *
     * @param {function} callback
     *
     * @returns {Interval}
     */
    that.deleteInterval = ({callback = () => {}} = {}) => {
        this.stopInterval({
            callback: callback
        });

        interval = null;
    };

    /**
     * Returns the execution status of the the interval.
     *
     * @returns {boolean}
     */
    that.getStatus = function () {
        return status;
    };

    /**
     * Changes the time between each step of the execution.
     *
     * @param {number} [mewMs=1000] Time in milliseconds.
     */
    that.setTime = (mewMs = 1000) => {
        last.ms = ms;

        ms = checkTime(mewMs);
    };

    /**
     * Returns the current setted time (in milliseconds).
     *
     * @returns {number}
     */
    that.getTime = () => {
        return ms;
    };
}

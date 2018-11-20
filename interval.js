function Interval({callback, repetitionDelay = 1000, start = true} = {}) {
    let _interval = null;
    let _status = false;
    let _last = {
        callback: null,
        repetitionDelay: null
    };
    
    function isFunction(callbackCheck) {
        return callbackCheck && {}.toString.call(callbackCheck) === '[object Function]';
    }
    
    if (!isFunction(callback)) {
        throw new Error('Callback must be a function.');
    }
    
    if (repetitionDelay !== parseInt(repetitionDelay, 10)) {
        throw new Error('Wrong repetition delay.');
    }
    
    _last = {
        callback: callback,
        repetitionDelay: repetitionDelay
    };
    
    if (start) {
        this.startInterval(_last);
    }
    
    this.startInterval = function ({callback = null, repetitionDelay = null} = {}) {
        if (repetitionDelay !== null) {
            if (repetitionDelay !== parseInt(repetitionDelay, 10)) {
                throw new Error('Wrong repetition delay.');
            }
                
            _last.repetitionDelay = repetitionDelay;
        }
        
        if (callback !== null) {
            if (!isFunction(callback)) {
              	throw new Error('Callback must be a function.');
            }
            
            _last.callback = callback;
        }
        
        if (!_status || _interval === null) {
            _interval = setInterval(_last.callback, _last.repetitionDelay);
            _status = true;
        }
        
        return this;
    };
    
    this.stopInterval = function ({callback = null} = {}) {
        if (_status && _interval !== null) {
            clearInterval(_interval);
            _status = false;
        }
        
        if (callback) {
            if (!isFunction(callback)) {
                throw new Error('Callback must be a function.');
            }
            
            callback();
        }
        
        return this;
    };
    
    this.deleteInterval = function ({callback = null} = {}) {
        this.stopInterval({
            callback: callback
        });
        
        _interval = null;
    }
    
    this.getStatus = function () {
        return _status;
    };
}

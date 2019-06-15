<a name="Interval"></a>

## Interval
**Kind**: global class  
**Version**: 1.2.1  
**Author:** Gennaro Landolfi <gennarolandolfi@codedwork.it>  

* [Interval](#Interval)
    * [new Interval([param])](#new_Interval_new)
    * [~interval](#Interval..interval) : <code>number</code> &#124; <code>null</code>
    * [~status](#Interval..status) : <code>boolean</code>
    * [~last](#Interval..last) : <code>Object</code>
    * [~isFunction(callback)](#Interval..isFunction) ⇒ <code>boolean</code>
    * [~checkTime(ms)](#Interval..checkTime) ⇒ <code>number</code>

<a name="new_Interval_new"></a>

### new Interval([param])
Wrapper form Intervals that makes possible to control their flow.

**Throws**:

- Will throw an error if `callback` is not a function.
- Will throw an error if `ms` is less or equal than 0.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [param] | <code>object</code> | <code>{}</code> |  |
| [param.callback] | <code>function</code> | <code>() =&gt; {}</code> | Callback that gets executed in repetition. |
| [param.ms] | <code>number</code> | <code>1000</code> | Milliseconds on how often to execute the code. |
| [param.start] | <code>boolean</code> | <code>true</code> | If true, the interval start at the creation of the object. |

<a name="Interval..interval"></a>

### Interval~interval : <code>number</code> &#124; <code>null</code>
Native interval ID.

**Kind**: inner property of <code>[Interval](#Interval)</code>  
<a name="Interval..status"></a>

### Interval~status : <code>boolean</code>
Current status of the execution. If true, the interval is in repetition.

**Kind**: inner property of <code>[Interval](#Interval)</code>  
<a name="Interval..last"></a>

### Interval~last : <code>Object</code>
Cache of the old data.

**Kind**: inner property of <code>[Interval](#Interval)</code>  
<a name="Interval..isFunction"></a>

### Interval~isFunction(callback) ⇒ <code>boolean</code>
Checks if a callback is a valid function.

**Kind**: inner method of <code>[Interval](#Interval)</code>  
**Throws**:

- Will throw an error if the given callback isn't a valid function.


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback to be checked. |

<a name="Interval..checkTime"></a>

### Interval~checkTime(ms) ⇒ <code>number</code>
Checks a given value is a valid time value.

**Kind**: inner method of <code>[Interval](#Interval)</code>  
**Throws**:

- Will throw an error if the given time is too low.


| Param | Type | Description |
| --- | --- | --- |
| ms | <code>number</code> &#124; <code>string</code> | Time in milliseconds to be checked. |


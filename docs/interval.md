<a name="Interval"></a>

## Interval
**Kind**: global class  
**Version**: 1.2.0  
**Author:** Gennaro Landolfi <gennarolandolfi@codedwork.it>  

* [Interval](#Interval)
    * [new Interval([param])](#new_Interval_new)
    * _instance_
        * [.startInterval(callback, [ms])](#Interval+startInterval) ⇒ <code>[Interval](#Interval)</code>
        * [.stopInterval(callback)](#Interval+stopInterval) ⇒ <code>[Interval](#Interval)</code>
        * [.deleteInterval(callback)](#Interval+deleteInterval) ⇒ <code>[Interval](#Interval)</code>
        * [.getStatus()](#Interval+getStatus) ⇒ <code>boolean</code>
        * [.setTime([mewMs])](#Interval+setTime)
        * [.getTime()](#Interval+getTime) ⇒ <code>number</code>
    * _inner_
        * [~interval](#Interval..interval) : <code>number</code> &#124; <code>null</code>
        * [~status](#Interval..status) : <code>boolean</code>
        * [~last](#Interval..last) : <code>Object</code>

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

<a name="Interval+startInterval"></a>

### interval.startInterval(callback, [ms]) ⇒ <code>[Interval](#Interval)</code>
Starts the interval if paused.

**Kind**: instance method of <code>[Interval](#Interval)</code>  

| Param | Type | Default |
| --- | --- | --- |
| callback | <code>function</code> |  | 
| [ms] | <code>number</code> | <code>1000</code> | 

<a name="Interval+stopInterval"></a>

### interval.stopInterval(callback) ⇒ <code>[Interval](#Interval)</code>
Pauses the interval and executes a callback if provided.

**Kind**: instance method of <code>[Interval](#Interval)</code>  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="Interval+deleteInterval"></a>

### interval.deleteInterval(callback) ⇒ <code>[Interval](#Interval)</code>
Deletes the interval executes a callback if provided.

**Kind**: instance method of <code>[Interval](#Interval)</code>  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="Interval+getStatus"></a>

### interval.getStatus() ⇒ <code>boolean</code>
Returns the execution status of the the interval.

**Kind**: instance method of <code>[Interval](#Interval)</code>  
<a name="Interval+setTime"></a>

### interval.setTime([mewMs])
Changes the time between each step of the execution.

**Kind**: instance method of <code>[Interval](#Interval)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [mewMs] | <code>number</code> | <code>1000</code> | Time in milliseconds. |

<a name="Interval+getTime"></a>

### interval.getTime() ⇒ <code>number</code>
Returns the current setted time (in milliseconds).

**Kind**: instance method of <code>[Interval](#Interval)</code>  
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

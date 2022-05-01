// tesk 5 map of obj ??
function mapObj(fn) {
    if (typeof fn != 'function') {
        return;
    }
    let result = {};
    for (let i in this) {
        result[i] = fn(this.i, i, this);
    }
    return result;
}
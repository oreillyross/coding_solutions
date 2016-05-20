// This is a working area for node code and can be deleted each time

function heap(items){
    return part([],items);

    function part(done,rest){
        return rest.length?
            part(done,tail(rest))
                .concat(part(done.concat(rest[0]),tail(rest)))
            :[done]}
    function tail(a){return a.slice(1)}
}

console.log(heap(['a','a', 'b']))

var memoize = function memoize(f) {
    const store = {};
    
    return function() {
        const arg_str = JSON.stringify(arguments);
        store[arg_str] = store[arg_str] || f.apply(f, arguments);
        return store[arg_str];
    };    
};

// to test the above.

const double = memoize(function(a) {
    return a + a;
});

console.log(double(2))
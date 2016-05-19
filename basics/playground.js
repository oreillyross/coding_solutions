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
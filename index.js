function myEach(collection, callback) {
    let array = [];
    if (Array.isArray(collection)) {
        array = Object.values(collection);
    } else {
        array = collection
    }
    for (let index = 0; index < collection.length; index++) {
        callback(collection[index]);
    }
    return collection;
}

function myMap(collection, callback) {
    let array = [];
    let newArray = [];
    if (Array.isArray(collection)) {
        array = Object.values(collection)
    } else {
        array = collection
    };
    for (let index = 0; index < collection.length; index++) {
        newArray.push(callback(array[index]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let array = [];
    if (Array.isArray(collection)) {
        array = Object.values(collection);
    } else {
        array = collection
    }
    if (!acc) {
        acc = array[0];
        array = array.slice(1);
    }
    
}

function myFind(collection, predicate) {
    let array = [];
    if (Array.isArray(collection)) {
        array = Object.values(collection);
    } else {
        array = collection
    }
    for (let index = 0; index < collection.length; index++) {
        if (predicate(collection[index]))
        return collection[index];
    }
    return collection;
}
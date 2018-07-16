// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    let new_object = Object.assign({}, driver, {[key]: value});
    return new_object;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver
};

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
};
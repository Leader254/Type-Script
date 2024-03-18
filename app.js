// // let message: string = 'Hello Typescript!';
function buildTeslaModels(teslaObj) {
    return teslaObj;
}
var model = buildTeslaModels({
    length: 196,
    width: 86,
    wheelbase: 116,
    seatingCapacity: 4,
    getTyrePressure: function () {
        var tyrePressure = 20;
        return tyrePressure;
    },
    getRemCharging: function () {
        var remCharging = 20;
        return remCharging;
    }
});
console.log(model);

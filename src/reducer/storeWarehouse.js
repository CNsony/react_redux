/**
 * Created by scai051 on 11/14/2017.
 */
import store from "./store"
const WareHouse = function(house) {
    let warehouse = {};
    house.map(argument =>{
        console.log(argument)
        warehouse.argument = store.argument
        warehouse.a = 1;
    })
    console.log(warehouse)
    return warehouse
}
export default WareHouse
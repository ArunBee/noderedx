import Add_To_Cart from '../Constants'

export const addtocart=(data) => {
return{
    type: Add_To_Cart,//most important ye hume btati hai k data kis se related hai
    data: data
}
}

export const removetocart=(data) => {
    return{
        type: "Remove_To_Cart",// It must be differnet from another type
        data: data
    }
}
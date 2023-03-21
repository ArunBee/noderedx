import {Add_To_Cart} from '../Constants'

const initialState ={
    cardData:[]//items on product page e.f pro-image, price, desc, quantity|| Data from Actions.js
}
function CardItem(state=initialState, actions)//no need to import, it automatically called internally
{
    switch(actions.type)//what action performed Add to cart, remove from cart ect.
    {
        case Add_To_Cart:
        return{
            ...state,//Default data of the page
            cardData:actions.data
        }
        break;
        default:
            return state// is (state) ka component state se koi lena dena nhi hai       
    }
    
}
//All the reducer are mearge on Root reducers (function CardItem is one reducer). There are multiple reducers

export default CardItem;
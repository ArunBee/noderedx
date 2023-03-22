import { connect } from 'react-redux';//for connect redux and react
import Home from '../Component/Home'
import { addtocart } from '../Services/action/actions'//call the functions

const mapStateToProps = state=>({

})

const mapDispatchToProps = dispatch=>({
    addtocartHandler :data=>dispatch(addtocart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)//these are two parameters mapStateToProps, mapDispatchTo Props

//export default Home;
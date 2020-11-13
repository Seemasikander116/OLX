import {connect} from 'react-redux'
import Cards from '../Cards'
import {addToCart, facebook_login} from '../services/actions/actions.js'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    facebook_login: ()=>dispatch(facebook_login())
})
export default connect(mapStateToProps,mapDispatchToProps)(Cards)
// export default Home;

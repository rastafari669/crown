import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropDown/CartDropDown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';

const Header = ({currentUser,hidden}) =>(

    <div className='header'>
 <Link to='/' className='logo-container'>
 <Logo className='logo'/>
 </Link>
   <div className='options'>
<Link to='/shop' className='option'>
SHOP
</Link>

<Link to='/' className='option'>
CONTACT
</Link>

{
   currentUser ? (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> )
   : 
   (<Link className='option' to='/signin'>SIGN IN</Link>)
}
<CartIcon/>
   </div>
   {hidden? null : <CartDropDown/>}
   
    </div>
)

const mapStateToProps =  createStructuredSelector({
currentUser: selectCurrentUser,
hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../store/action/login'
import logo from '../assets/images/logo.png'
import $ from 'jquery';

class Menutop extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false;
    }

    state = {
        isTop: false,
        menuactive: false,
        menuStyle: '',
    };

    componentDidMount() {
        this._isMounted = true;

        if (this.props.PmenuStyle === 'menu1') {
            this.setState({
                menuStyle: 'wrap-main-menu wrap-main-menu-home'
            })
        } else {
            this.setState({
                menuStyle: 'wrap-main-menu wrap-main-menu-pricing'
            })
        }
        document.addEventListener('scroll', () => {
            if (this._isMounted) {
                if (window.scrollY > 20) {
                    if (this.props.PmenuStyle === 'menu1') {
                        this.setState({
                            menuStyle: 'wrap-main-menu wrap-main-menu-home wrap-main-menu-active'
                        })
                    } else {
                        this.setState({
                            menuStyle: 'wrap-main-menu wrap-main-menu-pricing wrap-main-menu-active'
                        })
                    }
                } else {
                    if (this.props.PmenuStyle === 'menu1') {
                        this.setState({
                            menuStyle: 'wrap-main-menu wrap-main-menu-home'
                        })
                    } else {
                        this.setState({
                            menuStyle: 'wrap-main-menu wrap-main-menu-pricing'
                        })
                    }
                }
            }
        });

        // menu bar show
        $('.bt-show-menu-mobile').on("click", function () {
            $('body').addClass('menu-mobile-active');
        });

        // menu bar hide
        $('.bt-close-menu-mobile').on("click", function () {
            $('body').removeClass('menu-mobile-active');
        });

        $('.main-menu-mobile ul li.menu-item-has-children a span').on("click", function (e) {
            e.preventDefault();
            $(this).parent().parent().find(">ul").slideToggle(300);
            this.classList.toggle("icon-change");
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onButtonClick = () => {
        // Menghapus username dari redux state
        this.props.logoutUser()
    }

    renderBeforeLogin = () => {
        return (
            <div>
                {/* <div className={this.state.isTop ? 'wrap-main-menu wrap-main-menu-home wrap-main-menu-active' : 'wrap-main-menu wrap-main-menu-home'}> */}
                <div className={this.state.menuStyle}>
                    <div className="main-logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="wrap-main-menu-right">
                        <div className="main-menu-right">
                            <ul className="">
                                <li className="menu-item-has-children"><Link to="/">Product</Link>
                                    <ul>
                                        <li><Link to="/Pitch">Pitch</Link></li>
                                        <li><Link to="/Mentoring">Mentoring</Link></li>
                                        <li><Link to="/Perks">Perks</Link></li>
                                        <li><Link to="/Pitchdeck">Pitchdeck</Link></li>
                                        <li><Link to="/Community">Community</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Pricing">pricing</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                                <li className="custom-bt-mn"><Link to="/Signup">Sign Up</Link></li>
                            </ul>
                        </div>
                        <div className="menu-burger" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}>
                            <i className="fa fa-bars bt-show-menu-mobile"></i>
                        </div>
                    </div>
                </div>

                <div className={this.state.menuactive ? "wrap-menu-mobile wrap-menu-mobile-active" : "wrap-menu-mobile"}>
                    <div className="menu-wrap-mobile-active">
                        <div className="close-menu-mobile" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}>
                            <i className="fa fa-close bt-close-menu-mobile"></i>
                        </div>
                        <div className="main-menu-mobile">
                            <ul>
                                <li className="menu-item-has-children"><Link to="/"><span></span>Product</Link>
                                    <ul>
                                        <li><Link to="/Pitch">Pitch</Link></li>
                                        <li><Link to="/Mentoring">Mentoring</Link></li>
                                        <li><Link to="/Perks">Perks</Link></li>
                                        <li><Link to="/Pitchdeck">Pitchdeck</Link></li>
                                        <li><Link to="/Community">Community</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Pricing"><span></span>Pricing</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                                <li className="custom-bt-mn-mob"><Link to="/Signup">Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderAfterLogin = () => {
        return (
            <div>
                {/* <div className={this.state.isTop ? 'wrap-main-menu wrap-main-menu-home wrap-main-menu-active' : 'wrap-main-menu wrap-main-menu-home'}> */}
                <div className={this.state.menuStyle}>
                    <div className="main-logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="wrap-main-menu-right">
                        <div className="main-menu-right">
                            <ul className="">
                                <li className="menu-item-has-children"><Link to="/">Product</Link>
                                    <ul>
                                        <li><Link to="/Pitch">Pitch</Link></li>
                                        <li><Link to="/Mentoring">Mentoring</Link></li>
                                        <li><Link to="/Perks">Perks</Link></li>
                                        <li><Link to="/Pitchdeck">Pitchdeck</Link></li>
                                        <li><Link to="/Community">Community</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Pricing">pricing</Link></li>
                                <li className="custom-bt-mn"><Link to="/Dashboard">Dashboard</Link></li>
                            </ul>
                        </div>
                        <div className="menu-burger" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}>
                            <i className="fa fa-bars bt-show-menu-mobile"></i>
                        </div>
                    </div>
                </div>

                <div className={this.state.menuactive ? "wrap-menu-mobile wrap-menu-mobile-active" : "wrap-menu-mobile"}>
                    <div className="menu-wrap-mobile-active">
                        <div className="close-menu-mobile" onClick={(e) => this.setState({ menuactive: !this.state.menuactive })}>
                            <i className="fa fa-close bt-close-menu-mobile"></i>
                        </div>
                        <div className="main-menu-mobile">
                            <ul>
                                <li className="menu-item-has-children"><Link to="/"><span></span>Product</Link>
                                    <ul>
                                        <li><Link to="/Pitch">Pitch</Link></li>
                                        <li><Link to="/Mentoring">Mentoring</Link></li>
                                        <li><Link to="/Perks">Perks</Link></li>
                                        <li><Link to="/Pitchdeck">Pitchdeck</Link></li>
                                        <li><Link to="/Community">Community</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/Pricing"><span></span>Pricing</Link></li>
                                <li className="custom-bt-mn-mob"><Link to="/Dashboard">Dashboard</Link></li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        )
    }

    render() {
        // console.log("menu", this.props.user.Auth.email === "" )
        if( this.props.user.Auth.email === '' ){
            return (
                    this.renderBeforeLogin()
                )
            } else {
                return (
                    this.renderAfterLogin()
                )
            }
        }
    }

const mapStateToProps = state => {
    return {
      user : state
    }
}

export default connect(mapStateToProps, {logoutUser})(Menutop)
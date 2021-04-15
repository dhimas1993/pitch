import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavigationInfo extends Component{
    constructor(props) {
        super(props)
        this._isMounted = false;
    }
    
    state = {
        isTop: false,
        menuactive:false,
        nav1:'',
        nav2:'',
        nav3:''
    };

    componentDidMount(){
        this._isMounted = true;

        if(this.props.Navigationactive == 'navigation1'){
            this.setState({
                nav1:'active'
            })
        }if(this.props.Navigationactive == 'navigation2') {
            this.setState({
                nav2:'active'
            })
        }else if(this.props.Navigationactive == 'navigation3'){
            this.setState({
                nav3:'active'
            })
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        return (
            <div>
                <div className="info-step-regist-icon">
					<ul>
						<li className={this.state.nav1}>
							<div className="i-step-regist-icon-numb">1</div>
							<div className="i-step-regist-icon-text">Company Information</div>
							<div className="clear"></div>
						</li>
						<li className={this.state.nav2}>
							<div className="i-step-regist-icon-numb">2</div>
							<div className="i-step-regist-icon-text">Personal Information</div>
							<div className="clear"></div>
						</li>
						<li className={this.state.nav3}>
							<div className="i-step-regist-icon-numb">3</div>
							<div className="i-step-regist-icon-text">Checkout</div>
							<div className="clear"></div>
						</li>
					</ul>
				</div>
            </div>
        )
    }
}
export default NavigationInfo
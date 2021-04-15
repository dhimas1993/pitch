import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkArrowUp extends Component{

    componentDidMount() {}
    render(){
        return (
            <div>
                <Link to={this.props.linkprev} className="bt-nav-regist-prev">
					<i class="fa fa-angle-up"></i>
				</Link>
            </div>
        )
    }
}
export default LinkArrowUp
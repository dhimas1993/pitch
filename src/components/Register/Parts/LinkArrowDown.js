import React from 'react';
import { Link } from 'react-router-dom';

function LinkArrowNext (props){
        return (
            <div>
                <Link to={props.linknext} className="bt-nav-regist-next">
					<i class="fa fa-angle-down"></i>
				</Link>
            </div>
        )
}
export default LinkArrowNext
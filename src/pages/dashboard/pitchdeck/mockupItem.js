import React, {useState, useEffect} from 'react'

function MockupItem(item){
    const [User, setUser] = useState(item.item)
    const [Dots, setDots] = useState(true)

    const dots = () => {
        setDots(!Dots)
    }

    return (
        <div className="item-box-pitchdeck-upload-file">
            <div className="item-box-pitchdeck-upload-file-in">
                <div className="img-thumbnail-pitchdeck-file">
                    <img src={`${process.env.REACT_APP_URL}${User}`} />
                    <div className="hover-menu-thumbnail-pitchdeck">
                        <div onClick={() => dots()} className="item-cta-button-3-circle toogle-show-menu-3-bt">
                            <span className="circle-icon-cta-bt" />
                            <span className="circle-icon-cta-bt" />
                            <span className="circle-icon-cta-bt" />
                        </div>
                    </div>
                </div>
                <div className="text-detail-name-pdf-pitchdeck text-detail-name-pdf-pitchdeck-cusui">
                    <img src="images/iconimg.png" alt="" />
                    <span>{User.substring(16)}</span>
                    <div className="clear" />
                </div>
            </div>
            <div className={Dots ? "menu-show-button3-circle" : "menu-show-button3-circle menu-show-button3-circle-active"}>
                <ul className="menu-bt-circle-3">
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Delete</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MockupItem
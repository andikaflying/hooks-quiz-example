import React from 'react'
import { Link} from 'react-scroll';

// images 
import logo from '../../images/logo2.svg'


const mainMenus = ['home', 'about', 'features', 'demo', 'integration']

const PreviewHeader = () => {
    return (
        <header className="previewHeaderArea">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="previewMainmenu">
                            {mainMenus.map(menu => (
                                <li key={menu}>
                                    <Link
                                        activeClass="active"
                                        spy
                                        smooth
                                        offset={0}
                                        duration={1000}
                                        to={menu}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default PreviewHeader
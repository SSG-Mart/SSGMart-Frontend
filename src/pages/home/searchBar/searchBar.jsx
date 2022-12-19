import Logo from '../../../assets/ssg_mart.png';
import './searchBar.scss'

const searchBar = () => (
    <div className="searchBar-container">
        <nav>
            <div className='logoContainer' style={{display: 'flex', alignItems: 'center'}}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div> {/* end logo class */}

                <div className="name">
                    <p>SSG Mart</p>
                </div> {/* end name class */}
            </div>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <form action="/" method="get" className='form'>
                    <input className='search' type="text" id="search" placeholder="Search...."/>
                </form> {/* end search class */}
                <div>
                <button className='search-btn' ><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            </div>

        </nav>
    </div>
);

export default searchBar;
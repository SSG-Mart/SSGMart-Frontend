import Logo from '../../../assets/ssg_mart.png';
import './searchBar.scss'

const searchBar = () => (
    <div className="searchBar-container">
        <nav>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div> {/* end logo class */}

            <div className="name">
                <p>SSG Mart</p>
            </div> {/* end name class */}

            <form action="/" method="get" className='form'>
                <input className='search' type="text" id="search" placeholder="Search...."/>
            </form> {/* end search class */}
            <div>
            <button className='search-btn' ><i class="fa-solid fa-magnifying-glass"></i></button>

            </div>

        </nav>
    </div>
);

export default searchBar;
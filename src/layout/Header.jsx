import {Search} from '../components/Search'

function Header() {
    return (
        <nav className="cyan header">
           <div className="container">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Cinema</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Link</a></li>
                        <li><a href="badges.html">Link</a></li>
                        <li><a href="collapsible.html">Link</a></li>
                    </ul>
                </div>
           </div>
        </nav>
    )
}

export {Header}
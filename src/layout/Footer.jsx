function Footer() {
    return (
        <footer className="page-footer cyan">
            <div className="footer-copyright cyan">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
            </div>
        </footer>
    )
}

export {Footer}

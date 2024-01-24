import { useAppSelector } from 'redux/hooks'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    const darkThemeState = useAppSelector((state) => state.darkThemeState)

    return (
        <footer className={`footer ${darkThemeState.footer}`}>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="logo"></div>
                    <p className="copyright">
                        © 2023 Viking recruiting, v 1.1.0
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import logo from '../assets/investment-calculator-logo.png';

interface Props{
    title: string;
}
export const Header = ({title}: Props) => {
    return (
        <header id="header">
            <img src={logo} alt="" />
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    );
}
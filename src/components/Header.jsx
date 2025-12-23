import logo from '../assets/investment-calculator-logo.png';
export default function Header() {
  return (
    <header id="header">
      <img src={logo}  alt="me" />
      <h1>Investment Calculaotor</h1>
    </header>
  );
}
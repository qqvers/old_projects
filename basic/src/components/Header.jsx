import img from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={img} />
      <h1>Investment calculator</h1>
    </header>
  );
}

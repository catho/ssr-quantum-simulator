const SandwichButton = () => (
  <>
    <input
      type="checkbox"
      aria-controls="hiddenDesktopMenu"
      aria-expanded="false"
      aria-label="Menu"
      id="menuSandwichButton"
    />
    <label className="SandwichButton" htmlFor="menuSandwichButton">
      &#x2630;
    </label>
  </>
);

export default SandwichButton;

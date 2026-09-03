import Checkbox from '../../common/Checkbox/Checkbox';
import './CharacterOptions.css';

export default function CharacterOptions() {
  return (
    <section className="character-options">
      <h2>Character Options</h2>
      <div className="character-options__list">
        <Checkbox label="Uppercase (A-Z)" />
        <Checkbox label="Lowercase (a-z)" />
        <Checkbox label="Numbers (0-9)" />
        <Checkbox label="Symbols (!@#$)" />
      </div>
    </section>
  );
}

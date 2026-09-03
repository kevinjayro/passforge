import './PasswordLength.css';

export default function PasswordLength() {
  return (
    <section className="password-length">
      <div className="password-length__header">
        <h2>Password Length</h2>
        <span>12</span>
      </div>

      <div className="password-length__limits">
        <span>1</span>
        <input
          className="password-length__range"
          type="range"
          min={5}
          max={32}
        />
        <span>32</span>
      </div>
    </section>
  );
}

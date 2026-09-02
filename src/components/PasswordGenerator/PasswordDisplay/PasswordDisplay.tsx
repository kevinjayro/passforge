import { Copy, LockKeyhole } from 'lucide-react';

import Button from '../../common/Button/Button';
import './PasswordDisplay.css';

export default function PasswordDisplay() {
  return (
    <section className="password-display">
      <div className="password-display__field">
        <LockKeyhole className="password-display__icon" size={20} />

        <input
          className="password-display__input"
          type="text"
          value="O8Jw2%#3ao3W"
          readOnly
        />
      </div>

      <Button
        icon={<Copy />}
        label="Copy Password"
        colorVariant="primary"
        size="medium"
        type="button"
      />
    </section>
  );
}

import { ShieldAlert, ShieldCheck, ShieldQuestionMark } from 'lucide-react';
import './PasswordStrength.css';

type StrengthLevel = 'weak' | 'medium' | 'strong';

type PasswordStrengthProps = {
  level: StrengthLevel;
};

const strengthConfig = {
  weak: {
    icon: ShieldAlert,
    message: 'Low security',
  },
  medium: {
    icon: ShieldQuestionMark,
    message: 'Medium security',
  },
  strong: {
    icon: ShieldCheck,
    message: 'High security',
  },
};

export default function PasswordStrength({ level }: PasswordStrengthProps) {
  const { icon: Icon, message } = strengthConfig[level];

  return (
    <div className="strength">
      <div className="bar">
        <span className={`progress ${level}`} />
      </div>
      <span className={`message ${level}`}>
        <Icon />
        {message}
      </span>
    </div>
  );
}

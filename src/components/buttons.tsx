// components/buttons.tsx
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import React from 'react';

type Variant = 'facebook-btn' | 'whatsapp-btn' | 'telegram-btn' | 'linkedin-btn';

type PropsButton = {
  class: Variant;
  link: string;
  size: number;
  label?: string; // <-- NEW: optional label override
};

const defaultLabel: Record<Variant, string> = {
  'facebook-btn': 'Facebook',
  'whatsapp-btn': 'WhatsApp',
  'telegram-btn': 'Telegram',
  'linkedin-btn': 'LinkedIn',
};

const iconMap: Record<Variant, React.ComponentType<{ fontSize?: number; className?: string }>> = {
  'facebook-btn': FaFacebookF,
  'whatsapp-btn': BsWhatsapp,
  'telegram-btn': FaTelegramPlane,
  'linkedin-btn': AiOutlineLinkedin,
};

export function Button({ class: variant, link, size, label }: PropsButton) {
  const Icon = iconMap[variant];
  const text = label || defaultLabel[variant];  // <-- use override if provided

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={variant}
      aria-label={text}
      title={text}
    >
      <span className="icon-button-wrap">
        <Icon fontSize={size} className="icon-button" />
        {text}
      </span>
    </a>
  );
}

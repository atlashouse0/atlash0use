import React from 'react';
import { FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';

type Variant = 'facebook-btn' | 'whatsapp-btn' | 'telegram-btn' | 'linkedin-btn';

type PropsButton = {
  class: Variant | string;
  link: string;
  size: number;
  label?: string;
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
  const baseVariant = variant.split(' ')[0] as Variant;
  const Icon = iconMap[baseVariant];
  const text = label || defaultLabel[baseVariant];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-btn ${variant}`}
      aria-label={text}
      title={text}
    >
      <span className="icon-button-wrap">
        <Icon fontSize={size} className="icon-button" />
        <span className="btn-text">{text}</span>
      </span>
    </a>
  );
}

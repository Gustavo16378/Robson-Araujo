import { RA_DATA } from "../data/content";

/** wa.me link built from the raw WhatsApp number (digits only). */
export const whatsappHref = `https://wa.me/${RA_DATA.brand.whats.replace(
  /\D/g,
  ""
)}`;

/** mailto: link for the contact e-mail. */
export const emailHref = `mailto:${RA_DATA.brand.email}`;

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5519981510748"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110
        hover:shadow-xl
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
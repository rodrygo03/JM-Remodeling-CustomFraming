import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-black text-center py-6">
      <div className="flex justify-center mb-4">
        <Link 
          to="/contact" 
          className="font-medium text-gray-800 hover:underline transition-colors duration-300"
        >
          {t('navbar.contact')}
        </Link>
      </div>
      <p className="text-sm">{new Date().getFullYear()} {t('footer.copyright')}</p>
    </footer>
  );
}

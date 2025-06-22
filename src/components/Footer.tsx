import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 text-center py-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
    </footer>
  );
}

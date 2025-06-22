import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-black text-center py-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      <div className="flex justify-center mt-20">
    </div>
    </footer>
  );
}

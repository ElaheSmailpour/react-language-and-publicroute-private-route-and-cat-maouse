import { useTranslation } from 'react-i18next';
const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        if (i18n.language === "de") {
            localStorage.setItem("lang", "en")
            i18n.changeLanguage("en")
        }
        else {
            localStorage.setItem("lang", "de")
            i18n.changeLanguage("de")
        }
    }
    return (
        <div style={{ backgroundColor: "yellow", margin: "1rem" }}>
            <h3>{t("eli")}</h3>
           
            <button onClick={changeLanguage}>{t("lang")}</button>
        </div>
    )
}
export default ChangeLanguage
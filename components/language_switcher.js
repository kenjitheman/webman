import { Select } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const languages = { en: "EN", uk: "UA", ru: "RU" };

const LanguageSwitcher = ({ id }) => {
    const router = useRouter();

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            const preferredLanguage = localStorage.getItem("preferredLanguage");
            if (preferredLanguage && languages[preferredLanguage]) {
                return preferredLanguage;
            }
        }
        return router.locale;
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("preferredLanguage", selectedLanguage);
        }
    }, [selectedLanguage]);

    const handleChangeLanguage = (locale) => {
        if (locale !== router.locale) {
            setSelectedLanguage(locale);
            const newPath = router.asPath.replace(`/${router.locale}`, `/${locale}`);
            router.push(newPath, newPath, { locale });
        }
    };

    return (
        <Select
            id={id}
            aria-label="Language"
            size="md"
            rounded="2xl"
            variant="outline"
            _hover={{
                borderColor: useColorModeValue("gray.400", "gray.600"),
                cursor: "pointer"
            }}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            value={selectedLanguage}
            width={{ base: "auto", md: "75px" }}
            onChange={(e) => handleChangeLanguage(e.target.value)}
        >
            {Object.entries(languages).map(([locale, language]) => (
                <option key={locale} value={locale}>
                    {language}
                </option>
            ))}
        </Select>
    );
};

export default LanguageSwitcher;

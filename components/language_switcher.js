import { Select } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const languages = { en: "EN", uk: "UA", ru: "RU" };

const LanguageSwitcher = ({ id }) => {
    const router = useRouter();

    // Use a state variable to manage the selected language
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        // Use localStorage if available, otherwise default to router locale
        return typeof window !== "undefined" ?
            localStorage.getItem("preferredLanguage") || router.locale :
            router.locale;
    });

    // Update localStorage when the selected language changes
    useEffect(() => {
        // Check if window is defined (to avoid issues during server-side rendering)
        if (typeof window !== "undefined") {
            localStorage.setItem("preferredLanguage", selectedLanguage);
        }
    }, [selectedLanguage]);

    const handleChangeLanguage = (locale) => {
        // Check if the selected language is different from the current one
        if (locale !== router.locale) {
            // Update the selected language in the component state
            setSelectedLanguage(locale);

            // Construct the new path with the selected language
            const newPath = router.asPath.replace(`/${router.locale}`, `/${locale}`);

            // Update the router's locale and path
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

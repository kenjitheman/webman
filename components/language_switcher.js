import { Select } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useRouter } from "next/router";

const languages = { en: "EN", uk: "UA", ru: "RU" };

const LanguageSwitcher = ({ id }) => {
    const router = useRouter();

    const handleChangeLanguage = async (locale) => {
        await router.push(router.pathname, router.asPath, { locale });
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
            value={router.locale}
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

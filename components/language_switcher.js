import { Select } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useRouter } from 'next/router';

const languages = { en: 'English', uk: 'Українська', ru: 'Русский' };

const LanguageSwitcher = ({ width }) => {
    const router = useRouter();

    const handleChangeLanguage = async (locale) => {
        await router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <Select
            id="language-select"
            aria-label="Language"
            size="md"
            rounded="2xl"
            variant="outline"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            value={router.locale}
            width={width}
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

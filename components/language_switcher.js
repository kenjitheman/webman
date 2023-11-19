import { Select } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

const LanguageSwitcher = ({ currentLanguage, languages }) => {
    languages = ['en', 'uk', 'ru'];
    return (
        <Select
            size="md"
            rounded="2xl"
            variant="outline"
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            defaultValue={currentLanguage}
            w={20}
            onChange={(e) => {
                const locale = e.target.value;
                window.location.href = `/${locale}`;
            }}
        >
            {languages.map((language) => (
                <option key={language} value={language}>
                    {language.toUpperCase()}
                </option>
            ))}
        </Select>
    );
}

export default LanguageSwitcher;

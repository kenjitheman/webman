import { Select } from '@chakra-ui/react';

const LanguageSwitcher = ({ currentLanguage, languages }) => {
    languages = ['en', 'uk', 'ru'];
    return (
        <Select
            size="md"
            rounded="2xl"
            variant="outline"
            defaultValue={currentLanguage}
            w={20}
            mx={2}
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

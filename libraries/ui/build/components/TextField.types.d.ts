/// <reference types="react" />
interface TextFieldProps {
    label: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default TextFieldProps;

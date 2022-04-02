/// <reference types="react" />
import { SelectChangeEvent } from "@mui/material";
export default interface SelectFieldProps {
    id: string;
    name: string;
    label?: string;
    placeholder: string;
    data: {
        name: string;
        value: number;
    }[];
    helperText?: string | any;
    value: string;
    error: boolean | any;
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}

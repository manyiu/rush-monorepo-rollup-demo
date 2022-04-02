import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material";

export default interface DropDownAutoCompleteProps {
  id: string;
  label?: string;
  placeholder?: string;
  helperText?: string | any;
  error?: boolean | any;
  options: string[];
  value: string | null;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined
  ) => void;
}

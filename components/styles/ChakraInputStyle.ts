import {ComponentStyleConfig} from "@chakra-ui/react";
import {color} from "../colors";

export const Input: ComponentStyleConfig = {
    variants: {
        main: {
            field: {
                bgColor: color.base.textField,
                border: "1px solid",
                borderColor: color.base.textFieldStroke,
                color: color.text.primary,
                padding: "10px 9px", 
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "21px",
                _placeholder: {
                    color: color.text.secondary,
                },
                _disabled: {
                    _placeholder: {
                        color: color.text.disabled,
                    },
                    color: color.text.secondary,
                    bgColor: color.base.textFieldStroke,
                },
                _focus: {
                    borderColor: color.secondary.main,
                }
            },


        }

    },
    defaultProps: {
        variant: 'main',
    },
}


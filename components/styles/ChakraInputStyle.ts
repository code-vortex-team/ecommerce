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
                _placeholder: {
                    color: color.text.secondary
                },
                _disabled: {
                    _placeholder: {
                        color: color.text.disabled
                    },
                    color: color.text.disabled,
                    bgColor: color.base.textFieldStroke
                }
            },


        }

    },
    defaultProps: {
        variant: 'main',
    },
}


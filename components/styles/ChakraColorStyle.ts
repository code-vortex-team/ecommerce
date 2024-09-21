import {color} from "@/components/colors";
import {mode} from "@chakra-ui/theme-tools";

const varNameConfig = (name) => {
    return `--${name.replaceAll(".", "-")}`
}

export const replaceDotsWithVar = (obj) => {
    const newObj = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            newObj[key] = replaceDotsWithVar(obj[key]);
        } else {
            newObj[key] = `var(--${obj[key].replaceAll(".", '-')})`;
        }
    }
    return newObj;
}


export const ColorVariable = (props) => ({
    ':root': {
        [varNameConfig(color.primary.lighter)]: mode('#F8D4E4', '#F8D4E4')(props),
        [varNameConfig(color.primary.light)]: mode('#E97DAD', '#E97DAD')(props),
        [varNameConfig(color.primary.main)]: mode('#DB2777', '#DB2777')(props),
        [varNameConfig(color.primary.dark)]: mode('#831747', '#831747')(props),
        [varNameConfig(color.primary.darker)]: mode('#831747', '#2C0818')(props),

        [varNameConfig(color.secondary.lighter)]: mode('#CCF4FE', '#CCF4FE')(props),
        [varNameConfig(color.secondary.light)]: mode('#68CDF9', '#68CDF9')(props),
        [varNameConfig(color.secondary.main)]: mode('#078DEE', '#078DEE')(props),
        [varNameConfig(color.secondary.dark)]: mode('#003355', '#0351AB')(props),
        [varNameConfig(color.secondary.darker)]: mode('#012972', '#012972')(props),

        [varNameConfig(color.info.lighter)]: mode('#CAFDF5', '#CAFDF5')(props),
        [varNameConfig(color.info.light)]: mode('#61F3F3', '#61F3F3')(props),
        [varNameConfig(color.info.main)]: mode('#00B8D9', '#00B8D9')(props),
        [varNameConfig(color.info.dark)]: mode('#006C9C', '#006C9C')(props),
        [varNameConfig(color.secondary.darker)]: mode('#003768', '#003768')(props),

        [varNameConfig(color.success.lighter)]: mode('#D3FCD2', '#D3FCD2')(props),
        [varNameConfig(color.success.light)]: mode('#77ED8B', '#77ED8B')(props),
        [varNameConfig(color.success.main)]: mode('#22C55E', '#22C55E')(props),
        [varNameConfig(color.success.dark)]: mode('#118D57', '#118D57')(props),
        [varNameConfig(color.secondary.darker)]: mode('#065E49', '#065E49')(props),

        [varNameConfig(color.warning.lighter)]: mode('#FFF5CC', '#FFF5CC')(props),
        [varNameConfig(color.warning.light)]: mode('#FFD666', '#FFD666')(props),
        [varNameConfig(color.warning.main)]: mode('#FFAB00', '#FFAB00')(props),
        [varNameConfig(color.warning.dark)]: mode('#B76E00', '#B76E00')(props),
        [varNameConfig(color.secondary.darker)]: mode('#7A4100', '#7A4100')(props),

        [varNameConfig(color.error.lighter)]: mode('#FFE9D5', '#FFE9D5')(props),
        [varNameConfig(color.error.light)]: mode('#FFAC82', '#FFAC82')(props),
        [varNameConfig(color.error.main)]: mode('#B71D18', '#B71D18')(props),
        [varNameConfig(color.error.dark)]: mode('#7A0916', '#7A0916')(props),
        [varNameConfig(color.secondary.darker)]: mode('#47050D', '#47050D')(props),

        [varNameConfig(color.grey._0)]: mode('#FFFFFF', '#FFFFFF')(props),
        [varNameConfig(color.grey._100)]: mode('#E6E8EB', '#F9FAFB')(props),
        [varNameConfig(color.grey._200)]: mode('#CED2D7', '#F4F6F8')(props),
        [varNameConfig(color.grey._300)]: mode('#B5BBC3', '#DFE3E8')(props),
        [varNameConfig(color.grey._400)]: mode('#9CA5AF', '#9CA3AF')(props),
        [varNameConfig(color.grey._500)]: mode('#848E9B', '#919EAB')(props),
        [varNameConfig(color.grey._600)]: mode('#6C7885', '#637381')(props),
        [varNameConfig(color.grey._700)]: mode('#58616C', '#454F5B')(props),
        [varNameConfig(color.grey._800)]: mode('#444B54', '#1F2937')(props),
        [varNameConfig(color.grey._900)]: mode('#282A2C', '#151515')(props),
        [varNameConfig(color.grey._1000)]: mode('#000000', '#000000')(props),

        [varNameConfig(color.text.primary)]: mode('#000000', '#FFFFFF')(props),
        [varNameConfig(color.text.secondary)]: mode('#58616C', '#9CA3AF')(props),
        [varNameConfig(color.text.disabled)]: mode('#9CA5AF', '#454F5B')(props),
        [varNameConfig(color.text.reverse)]: mode('#FFFFFF', '#000000')(props),
        [varNameConfig(color.text.button)]: mode('#FFFFFF', '#FFFFFF')(props),

        [varNameConfig(color.icon.primary)]: mode('#000000', '#FFFFFF')(props),
        [varNameConfig(color.icon.secondary)]: mode('#58616C', '#DFE3E8')(props),
        [varNameConfig(color.icon.disabled)]: mode('#9CA5AF', '#919EAB')(props),
        [varNameConfig(color.icon.colorPrimary)]: mode('#DB2777', '#DB2777')(props),
        [varNameConfig(color.icon.colorSecondary)]: mode('#078DEE', '#078DEE')(props),
        [varNameConfig(color.icon.colorWarning)]: mode('#FFAB00', '#FFAB00')(props),
        [varNameConfig(color.icon.colorInfo)]: mode('#00B8D9', '#00B8D9')(props),
        [varNameConfig(color.icon.colorSuccess)]: mode('#22C55E', '#22C55E')(props),
        [varNameConfig(color.icon.colorError)]: mode('#B71D18', '#B71D18')(props),
        [varNameConfig(color.icon.reverse)]: mode('#FFFFFF', '#000000')(props),

        [varNameConfig(color.base.background)]: mode('#EEEFF1', '#0F0F10')(props),
        [varNameConfig(color.base.menu)]: mode('#FFFFFF', '#000000')(props),
        [varNameConfig(color.base.side)]: mode('#E6E8EB', '#151515')(props),
        [varNameConfig(color.base.card)]: mode('#E6E8EB', '#1F2937')(props),
        [varNameConfig(color.base.textField)]: mode('#FFFFFF', '#141516')(props),
        [varNameConfig(color.base.textFieldDisabled)]: mode('#CED2D7', '#3F4043')(props),
        [varNameConfig(color.base.textFieldStroke)]: mode('#CED2D7', '#3F4043')(props),
    },
})
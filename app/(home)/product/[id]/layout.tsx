import {Box} from "@chakra-ui/react";

const Layout = ({children, productData, ProductBottomSection}) => {

    return (<>

        <Box pl={{base: 0, md: 35}}>
            {productData}
            {ProductBottomSection}
        </Box>
        {children}

    </>)
}

export default Layout;
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {GridItem, SimpleGrid} from "@chakra-ui/react";
import Product from "@/components/product/Product";

const Related = () => {
    const [relatedData, setRelated] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/api/relatedProducts/${id}`).then(r => r.json()).then((r) => {
            setRelated(r)
        })
    }, []);

    return (<>
        <SimpleGrid columns={{md: 2, base: 1, lg: 3}} gap={4} pt={4}>

            {relatedData?.map((item, index) => (
                <GridItem
                    key={index}
                    sx={{
                        "& > div": {
                            width: "100%",
                            maxW: "100%"
                        }
                    }}

                ><Product   {...item} />
                </GridItem>))}
        </SimpleGrid>
    </>)
}

export default Related;
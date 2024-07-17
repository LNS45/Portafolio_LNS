<<<<<<< HEAD
import AcercaSection from "@/components/AcercaSection"
import HomeSection from "@/components/HomeSection"
import { Box } from "@chakra-ui/react"

//Pagina principal, para agregar mas rutas se requiere crear mas carpetas con su page.jsx en la carpeta app
export default function Page(){
    return (
        <Box w={"100%"} position={"relative"}>
            <HomeSection />
            <AcercaSection />
            <Box w={"50%"} h={"900px"}> </Box>
        </Box>
    )
=======
import AcercaSection from "@/components/AcercaSection"
import HomeSection from "@/components/HomeSection"
import { Box } from "@chakra-ui/react"

//Pagina principal, para agregar mas rutas se requiere crear mas carpetas con su page.jsx en la carpeta app
export default function Page(){
    return (
        <Box w={"100%"} position={"relative"}>
            <HomeSection />
            <AcercaSection />
            <Box w={"50%"} h={"900px"}> </Box>
        </Box>
    )
>>>>>>> a6b6748ea93bf5645ab6c9f210b7e149af6b65b3
}
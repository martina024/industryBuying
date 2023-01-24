import { Box, Link,Icon, Image, Button,Input } from '@chakra-ui/react'
import {TfiFacebook} from "react-icons/tfi"
import {BsTwitter} from "react-icons/bs"
import {FaPinterestP} from "react-icons/fa"
import React from 'react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box >
      <Tabs pb="40px" color="white" bg="#232f3e" >
        <TabList >
          <Tab  _selected={{ color: '#e9611e' }} >Shop All Categories</Tab>
          <Tab _selected={{ color: '#e9611e' }} >Shop All Brands</Tab>
          <Tab _selected={{ color: '#e9611e' }} >Popular Searches</Tab>
        </TabList>

        <TabPanels >
          <TabPanel >
            <Box display={"flex"} justifyContent="space-between"  fontSize={["8px","10px","13px"]} >
              <Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">LED Lights</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Paints</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Coporate Gifts</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Geysers</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Welding</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Tooling and Cutting</Link>
              <br/>
              </Box>
              </Box>

              <Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Abrasives</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Power Tools</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Pumps</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Safety</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Bearings</Link>
              <br/>
              </Box>
              <Box m="10px" >
              <Link color={"gray.400"} href="#">Cleaning</Link>
              <br/>
              </Box>
              </Box>

              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Dimension Measurement</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Electrical</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Electronics & Robotics</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Fasteners</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Furniture, Hospitality and Food Service</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hand Tools</Link>
                  <br/>
                </Box>
              </Box>



              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hydraulics</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">IT & Electronics</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Industrial Automation</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Lab Supplies</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Machinery</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Machining Accessories</Link>
                  <br/>
                </Box>
              </Box>


              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Medical Supplies & Equipment</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Office Supplies</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Plumbing</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Preumatics</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Automotive Maintenance and Accessories</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Security</Link>
                  <br/>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
          <Box display={"flex"} justifyContent="space-between" fontSize={["8px","10px","13px"]} >
              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Bosch</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Divano</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Regent</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Havells</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Vj Interior</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Kirloskar</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Crompton</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Solar India</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Karcher</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Blue Star</Link>
                  <br/>
                </Box>
              </Box>

              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Omron</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Su-kam</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Swift</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hp</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Ceat</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Aristo</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Nikamal</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Black & Decker</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Apollo</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Godrej</Link>
                  <br/>
                </Box>
              </Box>

              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Yking</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Kisankraft</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Oscar</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Housefull</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Makita</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Resqtech</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">HikVision</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Cranlik</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Almonard</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">HTC</Link>
                  <br/>
                </Box>
              </Box>



              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">JCB</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hitachi</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">SKIL</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Taparia</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Dewalt</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Ferm</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Supreme</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Techno</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Canon</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Mitutoyo</Link>
                  <br/>
                </Box>
              </Box>


              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Stanley</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Bridgestone</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Insize</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Tiger</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">HomePro</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Karma</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hillson</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Bilt</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Goodyear</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Cumi</Link>
                  <br/>
                </Box>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
          <Box display={"flex"} justifyContent="space-between"  fontSize={["8px","10px","13px"]} >
              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Office Chairs</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Tyres</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Safety Shoes</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Solar Panels</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Home & Car Washer</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Domestice Monoblock Pump</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Body Composition Monitor</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Borewell Submersible Pumps</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Vaccum Cleaners</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Printers</Link>
                  <br/>
                </Box>
              </Box>

              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Food Service Storage and Transportation</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Sawa</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Angle Grinders</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Electric Hoists</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Exterior Styling</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Demolition Hammers</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Rotary Hammers</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Pallet Trucks</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Industrial Waste Bins</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Petrol Chain Saw</Link>
                  <br/>
                </Box>
              </Box>

              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Arc Welding Machine</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">AMF Panel</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Wheel Chair</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Blood Pressure Monitors</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Cordless Tools</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Scanner</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Digital Distance Meters</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Storage Rack</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Platform Traolley</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Plastic Crates</Link>
                  <br/>
                </Box>
              </Box>



              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Chopsaws</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Digital Multimeters</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Drills</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Sewage Submersible Pumps</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Plastic Chairs</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Stabilizer</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">General Purpose Motor</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Wall Fans</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Tillers</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Solar UPS</Link>
                  <br/>
                </Box>
              </Box>


              <Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Electronic safes</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Hospital Beds</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Reception Furniture</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">LED Flood & Outdoor Lights</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Soldering Station</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Car Audio</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Openwell Submersible Pump</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Socket Sets</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">Single Phase Motor</Link>
                  <br/>
                </Box>
                <Box m="10px" >
                  <Link color={"gray.400"} href="#">LED Street Lights</Link>
                  <br/>
                </Box>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box p="40px" color="white" bg="#131a22"  >
        <Box  mr={"90px"} mb="20px" display={["block","block","flex"]} justifyContent="space-between" >
        <Box>
            <Text fontSize={"18px"} as="b">
              Company
            </Text>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">About Us</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Contact Us</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Careers</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Sell On Industrybuying</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Special offers</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Articles</Link>
                <br/>
              </Box>
        </Box>
        <Box>
          <Text fontSize={"18px"} as="b">
            Help
          </Text>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">FAQs</Link>
                <br/>
              </Box>
              <Box mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Report Infringement</Link>
                <br/>
              </Box>
              <Box mb="10px" mt="10px">
                <Link style={{ textDecoration: 'none' }} _hover={{color:"#e9611e"}} color={"gray.200"} href="#">Cancellations & Returns</Link>
                <br/>
              </Box>
              <Text fontSize={"18px"} as="b">
                Have a question or want to place an order?
              </Text>
              <Text color={"gray.200"} fontSize={"18px"}>
                Helpline Number: Call: +91 8448449073
              </Text>
        </Box>
        <Box>
          <Text fontSize={"18px"} as="b">
            Connect with us
          </Text>
          <Box mb="30px" >
            <Link color={"gray.400"} href="https://www.facebook.com/industrybuying" ><Icon m="10px" boxSize={["20px","25px","25px"]} as={TfiFacebook}/></Link>
            <Link color={"gray.400"} href="https://twitter.com/industrybuying" ><Icon m="10px" boxSize={["20px","25px","25px"]} as={BsTwitter}/></Link>
            <Link color={"gray.400"} href="https://www.pinterest.com/industrybuy0039/" ><Icon m="10px" boxSize={["20px","25px","25px"]} as={FaPinterestP}/></Link> 
          </Box>
          <Text fontSize={"18px"} as="b">
                Download Our APP!
          </Text>
          <Box m="25px" display="flex" >
            <Link mr="10px" href='https://play.google.com/store/apps/details?id=industrybuying.com.industrybuying' ><Image src='https://www.industrybuying.com/static/shipafreight/images/playstore.png'/></Link>
            <Link ml="10px" href='https://apps.apple.com/in/app/industrybuying/id1602345204'><Image src='https://www.industrybuying.com/static/shipafreight/images/ios-app.png'/></Link>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"18px"} as="b">
            Subscribe to Newsletter
          </Text>
          <Box mt="20px" display={"flex"} >
            <Input h={["20px","30px","40px"]} bg="white" fontSize={["8px","10px","13px"]} color="black" style={{borderRadius: "0px"}} placeholder="Enter your email address" />
            <Button _hover={{backgroundColor:"#e9611e"}} px="30px" h={["20px","30px","40px"]} fontSize={["8px","10px","13px"]} bg="#e9611e" style={{borderRadius: "0px"}} >Sign Me Up</Button>
          </Box>
          <Text color={"gray.200"} fontSize={["8px","10px","13px"]} >Sign up to get exclusive offers from our favorite brands<br/> and to be well up in the news</Text>
        </Box>
        </Box>
        

        <hr color='white'/>
      <Box display={["block","block","flex"]} justifyContent="center" mt="30px" >
        <Text fontSize={["10px","13px","18px"]} as="b" mr="30px" >Payment Options</Text>
        <Image w={["80%","80%","40%"]} h={["15px","20px",null]} src="https://www.industrybuying.com/static/images/payment_options_min.png"/>
      </Box>

      </Box>

      <Box w="100%" fontSize={["11px","12px","13px"]} display={["block","block","flex"]} justifyContent="center" p="10px" bg="#232f3e">
      <Text color={"gray.400"} >Copyright © industrybuying.com 2013-2022 All Right Reserved | &nbsp; </Text>
      <Link style={{ textDecoration: 'none' }} color="blue.500">Privacy Policy | &nbsp;</Link>
      <Link style={{ textDecoration: 'none' }} color="blue.500">Terms & Conditions </Link>
      </Box>

      <Box bg="gray.100">
      <Box p="20px" >
        <Text fontSize={"18px"} as="b" >Your trusted Partner to buy Business Supplies online</Text>
        <br/>
        <Text pt="10px">At Industrybuying.com, we are committed to offering the best online shopping experience to our customers. So be it exclusive prices on the top brands or an array of top notch products, you can order the top quality Industrial and Business Supplies at affordable prices online. Get exciting deals to empty your wish-list at the largest e-procurement platform and enjoy the best B2B e-commerce experience like never before. All top brands under a single roof, quality assured products and value for money offers make it the biggest B2B marketplace amongst all B2B suppliers. Avail best prices when you shop online at India’s leading B2B E-commerce Portal. Also, get the services of our best dealer and distributor network in top cities such as Delhi NCR, Mumbai, Chennai, Bengaluru, Kolkata, Chennai, Pune, Jaipur, Hyderabad and Ahmedabad.</Text>
      </Box>
      </Box>
      
      
     
    </Box>
  )
}

export default Footer

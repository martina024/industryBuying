// suvam pages------------->

import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Divider,
  Image,
  Text,
  Button,
  useToast,
  Input,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  Collapse,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

const data = [
  {
    id: 1,
    image:
      "https://static1.industrybuying.com/products_micro/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.82125517_1670416542273.webp",
    Brand: "POWERWASH",
    Voltage: "220 Volts",
    Frequency: "50 Hz",
    Model_No: "PW 280",
    Quantity: 1,
    Price: 7999,
    GST: "18",
    Description:
      "Powerwash High Pressure Power Sprayer PW 280 with 6 Months Warranty",
  },
  {
    id: 2,
    image:
      "https://static1.industrybuying.com/products_micro/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp",
    Description:
      "AgriPro 3 HP Butterfly Combined Rice Mill Machine without Motor APCRM6N9FC",

    Brand: "AgriPro",
    Machine_Size: "1050 (L) x 340 (W) x 1050 (H) mm",
    Spindle_Speed: "Rice Mill: 1400-1600 RPM, Disc Mill: 4500-5500 RPM",
    Type_of_Product: "Combined Rice Mill",
    Quantity: 1,
    Price: 7999,
    GST: "12",
  },
];
const CartPage = () => {
  const [Cart_Data, set_Cart_Data] = useState(data);
  const [pin, setPin] = useState("");
  const toast = useToast();
  const [err, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [total, settotal] = useState(0);
  const [show, setShow] = React.useState(false);

  // colapse function for price details
  const handleToggle = () => setShow(!show);

  //   const Get_All_Cart_Data = () => {
  //     fetch(`https://api.pujakaitem.com/api/products`).then((res) =>
  //       res.json().then((res) => {
  //         set_Cart_Data(res);
  //       })
  //     );
  //   };
  const handleTotal = () => {
    console.log("hhh");
    let Total = 0;
    data.map((ele) => {
      let addgst = (ele.Price / 100) * ele.GST;
      let singleprice = addgst + ele.Price;
      Total += Math.floor(singleprice * ele.Quantity);
    });
    settotal(Total);
  };
  useEffect(() => {
    handleTotal();
  }, [Cart_Data]);

  const handleDecrease = (item) => {
    if (item.Quantity > 1) {
      let newdata = Cart_Data.map((ele) => {
        if (ele.id == item.id) {
          return { ...ele, Quantity: ele.Quantity - 1 };
        } else return ele;
      });
      set_Cart_Data(newdata);
    } else {
      toast({
        title: "Quantity",
        description: "Minimum Quantity Is 1.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const handleIncrease = (item) => {
    if (item.Quantity < 5) {
      let newdata = Cart_Data.map((ele) => {
        if (ele.id == item.id) {
          return { ...ele, Quantity: ele.Quantity + 1 };
        } else return ele;
      });
      set_Cart_Data(newdata);
    } else {
      toast({
        title: "Quantity",
        description: "Maximum Quantity Is 5 .",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const findDelivery = () => {};
  const handleRemove = (item) => {
    const removedata = Cart_Data.filter((ele) => ele.id !== item.id);
    set_Cart_Data(removedata);
  };
  //   useEffect(() => {
  //     Get_All_Cart_Data();
  //   }, []);
  return (
    <>
      <Box
        w="100%"
        h="50px"
        border={"1px solid"}
        bgColor="#232f3e"
        position={"fixed"}
        top="0px"
        zIndex="20"
      ></Box>
      <Box>
        <Box display="flex" ml="10px" mt="70px">
          Total:{total}
          <Text>My Cart({data.length}items)</Text>
        </Box>
        <Box display="flex" mb="30px">
          <Box
            style={{ height: "500px", overflowY: "scroll" }}
            w="70%"
            m="10px"
          >
            <Box
              justifyContent="space-between"
              display="flex"
              w="100%"
              px="50px"
              py="10px"
              bgColor="#F5F5F5"
              m="auto"
            >
              <Text>Item</Text>
              <Text>Quantity</Text>
              <Text>Price (Inclusive of GST)</Text>
            </Box>
            {Cart_Data.map((item, index) => (
              <div key={item.id}>
                <SingleItem
                  key={item.id}
                  item={item}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                  handleRemove={handleRemove}
                />
                <Divider />
              </div>
            ))}
          </Box>
          <VStack w="30%" my="10px" mx="10px">
            <Box
              h="auto"
              pb="20px"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              w="100%"
            >
              {/*  pincode added and shiping section */}
              <Box
                bgColor={"#4d4d4d"}
                w="100%"
                h="40px"
                mb={"10px"}
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Payment Summary
                </Text>
                <Image
                  filter={"invert(100%)"}
                  w="20px"
                  src="https://www.industrybuying.com/static/desktop-payment/assets/svg/rupee-circle-icon.svg"
                />
              </Box>
              <HStack px="20px" w="100%">
                <Input
                  fontSize={"12px"}
                  w="100%"
                  placeholder="ENTER YOUR PINCODE"
                  _hover={{ border: "none" }}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <Button
                  position={"relative"}
                  left="-77px"
                  verticalAlign="middle"
                  zIndex="10"
                  onClick={findDelivery}
                >
                  CHECK
                </Button>
              </HStack>
            </Box>
            {/* Partner offer section */}
            <Box
              h="auto"
              pb="20px"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              w="100%"
            >
              <Box
                bgColor={"#4d4d4d"}
                w="100%"
                h="40px"
                mb={"10px"}
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Partner Offers
                </Text>
                <Image
                  filter={"invert(100%)"}
                  w="20px"
                  src="https://www.industrybuying.com/static/desktop-payment/assets/svg/discount-icon.svg"
                />
              </Box>
              <VStack
                textAlign={"left"}
                lineHeight="20px"
                align="flex-start"
                borderRadius={"7px"}
                px="20px"
                h="80px"
                bgColor={"#fffaef"}
                border="1px dashed #e3daad"
                w="90%"
                m="auto"
              >
                <Text fontWeight={"semibold"}>
                  Get GST invoice and save up to 28% on Business Purchases.
                </Text>
                <Link
                  onClick={onOpen}
                  color={"#046699"}
                  textDecoration="underline"
                >
                  View More
                </Link>
                <OverlayModel
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </VStack>
            </Box>

            <Box
              h="auto"
              pb="20px"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              w="100%"
            >
              <Box
                bgColor={"#4d4d4d"}
                w="100%"
                h="40px"
                mb={"10px"}
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Offers Available
                </Text>
                <Image
                  filter={"invert(100%)"}
                  w="20px"
                  src="https://www.industrybuying.com/static/desktop-payment/assets/svg/discount-icon.svg"
                />
              </Box>
              <HStack px="20px" w="100%">
                <Input
                  fontSize={"12px"}
                  w="100%"
                  placeholder="ENTER YOUR PINCODE"
                  _hover={{ border: "none" }}
                />
                <Link
                  as={Link}
                  position={"relative"}
                  left="-60px"
                  color="#fb8869"
                  verticalAlign="middle"
                  zIndex="20"
                  onClick={findDelivery}
                >
                  Apply
                </Link>
              </HStack>
            </Box>
            {/* first coupon box */}
            <Box
              px="10px"
              alignItems="flex-start"
              w="100%"
              pl="10px"
              h="200px"
              fontSize={"14px"}
              overflowY="scroll"
              scrollPadding={"10px"}
              scrollbarColor="white blue"
              sx={{
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                }
              }}
            >
              <Box>
                <Box display={"flex"}>
                  <Badge
                    bgColor={"#fb8869"}
                    alignItems="flex-start"
                    color="white"
                  >
                    Avalable
                  </Badge>
                </Box>
                <Flex w="100%" justifyContent={"space-between"}>
                  <Text>DUBAM300</Text>
                  <Link color={"#E53E3E"}>Apply Now</Link>
                </Flex>
                <Flex mt="20px" w="100%" justifyContent={"space-between"}>
                  <h6>Get Flat Rs. 300 Off.</h6>
                  <Link>T&C Apply</Link>
                </Flex>
              </Box>
              {/* second coupon box */}
              <Box>
                <Box display={"flex"} pt="30px" pb="4px">
                  <Badge
                    bgColor={"#fb8869"}
                    alignItems="flex-start"
                    color="white"
                  >
                    Avalable
                  </Badge>
                </Box>
                <Flex w="100%" justifyContent={"space-between"}>
                  <Text>APP300</Text>
                  <Link color={"#E53E3E"}>Apply Now</Link>
                </Flex>
              </Box>
              <Flex w="100%" mt="20px" justifyContent={"space-between"}>
                <h6>Get Flat Rs. 300 Off.</h6>
                <Link>T&C Apply</Link>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default CartPage;

const SingleItem = ({ item, handleDecrease, handleIncrease, handleRemove }) => {
  const [Cart_Data, set_Cart_Data] = useState(data);
  const [pin, setPin] = useState("");
  const toast = useToast();
  const [err, setError] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(true);
  const totalPrice = (item) => {
    let tax = Math.floor(item.Price / 100) * 18;
    let totaltax = tax * item.Quantity;
    let total = item.Price * item.Quantity + totaltax;
    return { total, tax: totaltax };
  };
  // colapse function for price details
  const handleToggle = () => setShow(!show);
  return (
    <Box h="250px" key={item.id}>
      {/* initial sec item quantity */}
      <Text
        mb="30px"
        textAlign={"left"}
        w="300px"
        fontSize="15px"
        display="flex"
        pl="10px"
        
      >
        {item.Description}
      </Text>

      <Box display="flex" w="95%" justifyContent="space-between" m="auto">
        <Box display="flex" fontSize="14px">
          <Box py="10px" px="10px" w="30%">
            <Image
              src={item.image}
              style={{
                width: "50px",

                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box textAlign={"left"} w="200px">
            <Text> Brand:{item.Brand}</Text>
            <Text> {item.Model_No}</Text>
            <Text> {item.Spindle_Speed}</Text>
            <Button
              style={{
                textAlign: "left",
                display: "flex",
                fontSize: "13px",
              }}
              pl="0px"
              bg="white"
              color="blue.300"
              onClick={() => handleRemove(item)}
            >
              <DeleteIcon color="grey" />
              Remove
            </Button>
          </Box>
        </Box>
        <div
          style={{
            width: "60px",
            display: "flex",
            height: "40px",
          }}
        >
          <button
            style={{
              width: "30px",
              height: "30px",
              fontSize: "20px",
              backgroundColor: "white",
              borderLeft: "o.5px solid",
              cursor: "pointer",
            }}
            onClick={() => handleDecrease(item)}
          >
            -
          </button>
          <input
            type="text"
            value={item.Quantity}
            style={{
              width: "30px",
              height: "30px",
              fontSize: "20px",
              textAlign: "center",
            }}
          />
          <button
            style={{
              width: "30px",
              height: "30px",
              fontSize: "20px",
              backgroundColor: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleIncrease(item)}
          >
            +
          </button>
        </div>
        <Box w="30%">
          <HStack w="50%" m="auto" justifyContent={"space-between"}>
            <span>RS:{totalPrice(item).total}</span>
            <Button
              fontSize={"14px"}
              color="#4299E1"
              w="40px"
              m="auto"
              background={"Background"}
              _hover={{ backgroundColor: "white" }}
              variantColor="blue"
              onClick={handleToggle}
            >
              Details{" "}
              {show ? (
                <AddIcon
                  borderRadius={"50%"}
                  w="15px"
                  h="15px"
                  border="1px solid #4299E1"
                  color={"blue.400"}
                />
              ) : (
                <MinusIcon
                  color={"blue.400"}
                  w="15px"
                  h="15px"
                  borderRadius={"50%"}
                  border="1px solid #4299E1"
                />
              )}
            </Button>
          </HStack>
          <Collapse color="black" mt={4} in={show}>
            <VStack
              w="200px"
              fontSize="12px"
              display="flex"
              justifyContent="space-between"
              p="10px"
              lineHeight="0.7"
              m="auto"
              bgColor="#F5F5F5"
            >
              <Box display="flex" w="95%" justifyContent="space-between">
                <span> Price Rs.</span>
                <span>{item.Price}</span>
              </Box>
              <Box
                display="flex"
                w="95%"
                justifyContent="space-between"
                m="auto"
              >
                <span> GST@{item.GST}%</span>

                <span>+Rs.{totalPrice(item).tax}</span>
              </Box>
              <Box
                display="flex"
                w="95%"
                justifyContent="space-between"
                m="auto"
              >
                <span>Final Price</span>
                <span>{totalPrice(item).total}</span>
              </Box>
            </VStack>
          </Collapse>
          <HStack w="70%" my="20px">
            <Image
              w="30px"
              h="30px"
              src="https://www.industrybuying.com/static/svg/delivery-truck-afterdiscount.svg"
              alt="Free Shipping"
            />
            <Text color={"#4c993e"}>Free shipping</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

// model for t&c checking
function OverlayModel({ isOpen, onClose }) {
  return (
    <>
      <Modal
        blockScrollOnMount={false}
        styles={{ width: "700px", maxWidth: "700px" }}
        isOpen={isOpen}
        onClose={onClose}
        borderRadius="10px"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgColor="#232f3e" color={"white"}>
            <Text fontSize={"16px"}>
              Get GST invoice and save up to 28% on business purchases
            </Text>
            <Text fontSize={"16px"}>
              We allow registered users to purchase products for their business
              use. You will receive business(GST) invoice with your company name
              and GST number.
            </Text>
          </ModalHeader>
          <ModalCloseButton
            w="40px"
            h="40px"
            bgColor={"#232f3e"}
            border="1px solid white"
            borderRadius={"50%"}
            position={"absolute"}
            top="-20px"
            right="-20px"
            color={"#000"}
          />
          <ModalBody color={"gray"}>
            <Text fontWeight="bold" mb="1rem">
              Here's How:
            </Text>
            <ul>
              <li>Create your free IndustryBuying user account with us</li>
              <li>Add the products in your cart and proceed to checkout</li>
              <li>
                During Checkout, select 'Use GSTIN for Business Purchase'
                checkbox
              </li>
              <li>
                Add your shipping and billing details in the address section
              </li>
              <li>
                Complete the order and you shall receive business(GST) invoice
                along with your delivered orders
              </li>
              <li>
                Your billing details will be saved with us for quicker checkout
                on your next purchase.
              </li>
              <li>
                You can edit the billing details any time later for your next
                purchase
              </li>
              <li>
                Please note that currently GST is mandatory for getting business
                Invoices
              </li>
              <li>Kindly provide correct billing details during checkout</li>
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

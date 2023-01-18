/** @format */

import React from "react";
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
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const StaticSingleData = () => {
  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab fontSize={["2xl", "3xl", "4xl"]}>DESCRIPTION</Tab>
          <Tab fontSize={["2xl", "3xl", "4xl"]}>SPECIFICATION</Tab>
          <Tab fontSize={["2xl", "3xl", "4xl"]}>QUICK LINKS</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text textAlign={"left"} fontSize="2xl" cursor={'pointer'}>
              Regent Square Net and Metal Black Mesh Chair features a unique
              design and stylishly padded seat. The black metal base contrasts
              with the soft mesh material to create a modern look that
              complements any room. The innovative adjustable armrests of this
              Office Chair help you sit comfortably, while adjustable pneumatic
              height adjustment allows you to find just the right position for
              resting during those long work days. The ergonomic chair has been
              constructed from a sturdy steel frame, providing you with utmost
              comfort. The chair features a pneumatic seat height adjustment
              that allows you to adjust the seat according to your requirements.
              It is easy to assemble and can be configured in a number of ways
              using its five-star base and backrest design. This Black Mesh
              Chair can be used in the Conference room, Club House , Home,
              Social gathering etc, to provide a perfect sitting position.
              <br />
              <br />
              <p>1. What are the features/properties of the product?</p>
              <p>
                This mesh chair features a black colour, sturdy frame and
                comfortable padding on the back, seat and armrests.{" "}
              </p>
              <br />
              <p>2. Is this product durable?</p>
              <p>
                The durable heavy duty plastic frame resists warping, corrosion
                and cracking.
              </p>
              <br />
              <p>3. What are the features/properties of the product?</p>
              <p>
                This mesh chair features a black colour, sturdy frame and
                comfortable padding on the back, seat and armrests.{" "}
              </p>
              <br />
              <p>
                Make sure to clean your chair regularly. Whether your chair is
                mesh, plastic, or velvet, vacuuming it once a week will help
                eliminate dust, dirt, and grime from accumulating in your office
                chair Clean the casters of the chair roll from time as a lot of
                dust can accumulate on it, resulting in less mobility. Make sure
                to vacuum this area frequently and apply a lubricant for better
                mobility Do not clean your chair with harsh cleaners, as doing
                so can fade the chair and material. Make sure to use gentle
                cleaners on a damp cloth and then use it on the chair Comfort is
                the essential thing that one looks for when looking for office
                chairs. One needs to sit on a chair for long hours, and if the
                chair isn’t right or comfortable enough for them, it can cause
                severe health issues like sore shoulders, back pain, arms, and
                many other problems. That is why it is essential to invest in a
                good office chair.
              </p>
            </Text>
          </TabPanel>
          <TabPanel>
            <TableContainer  cursor={'pointer'}>
              <Table variant="striped" fontSize={["xl", "2xl", "2xl"]}>
                <Tbody>
                  <Tr>
                    <Td> SKU</Td>
                    <Td fontWeight={'bold'}>: OFF.OFF.41401314</Td>
                  </Tr>
                  <Tr>
                    <Td>Type of Product</Td>
                    <Td fontWeight={'bold'}>: Low Back Mesh Chair</Td>
                  </Tr>
                  <Tr>
                    <Td>Color</Td>
                    <Td fontWeight={'bold'}>: Black</Td>
                  </Tr>
                  <Tr>
                    <Td>Best Seller</Td>
                    <Td fontWeight={'bold'}>: Top Selling</Td>
                  </Tr>
                  <Tr>
                    <Td> Model No</Td>
                    <Td fontWeight={'bold'}>: SS 105</Td>
                  </Tr>
                  <Tr>
                    <Td>Base</Td>
                    <Td fontWeight={'bold'}>: Chrome Five Star Base 300mm</Td>
                  </Tr>
                  <Tr>
                    <Td>Installation</Td>
                    <Td fontWeight={'bold'}>: DIY (Do it Yourself)</Td>
                  </Tr>
                  <Tr>
                    <Td>Dispatch Time</Td>
                    <Td fontWeight={'bold'}>: 24 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Chair Type</Td>
                    <Td fontWeight={'bold'}>: Executive Chair</Td>
                  </Tr>
                  <Tr>
                    <Td>Is Consumable</Td>
                    <Td fontWeight={'bold'}>: N</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td fontWeight={'bold'}>centimetres (cm)</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td fontWeight={'bold'}>metres (m)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer  cursor={'pointer'}>
              <Table variant="striped" fontSize={["xl", "2xl", "2xl"]}>
              <Tbody>
                  <Tr>
                    <Td>Type of Product</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Low Back Mesh Chair</Td>
                  </Tr>
                  <Tr>
                    <Td>Best Seller</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Top Selling</Td>
                  </Tr>
                  <Tr>
                    <Td> SKU</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: OFF.OFF.41401314</Td>
                  </Tr>
                  <Tr>
                    <Td>Type of Product</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Low Back Mesh Chair</Td>
                  </Tr>
                  <Tr>
                    <Td>Color</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Black</Td>
                  </Tr>
                  <Tr>
                    <Td>Best Seller</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Top Selling</Td>
                  </Tr>
                  <Tr>
                    <Td> Model No</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: SS 105</Td>
                  </Tr>
                  <Tr>
                    <Td>Base</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Chrome Five Star Base 300mm</Td>
                  </Tr>
                  <Tr>
                    <Td>Installation</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: DIY (Do it Yourself)</Td>
                  </Tr>
                  <Tr>
                    <Td>Dispatch Time</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: 24 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Chair Type</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: Executive Chair</Td>
                  </Tr>
                  <Tr>
                    <Td>Is Consumable</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>: N</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>centimetres (cm)</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td textDecoration={'underline'} color={'blue.600'}>metres (m)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default StaticSingleData;

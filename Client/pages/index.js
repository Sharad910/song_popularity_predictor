import Head from "next/head";
import { useFormik } from "formik";
import {
  Flex,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  Text,
  Button,
  useDisclosure,
  Box,
  keyframes,
  Spacer,
} from "@chakra-ui/react";
import { motion} from "framer-motion";
import { sendData } from "@/lib/api";
import Score from "@/comps/score";
import { useEffect, useState } from "react";
import Carousel from "nuka-carousel"
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [score,setScore]=useState({Pscore:0});
  const [press,setPress]=useState(true);
  const [loading,setLoading]=useState(false);
  useEffect((()=>{
    if(!press){
      onOpen();
    }
    if(press==true){
      setPress(false);
    }
  }),[score])
  const formik = useFormik({
    initialValues: {
      param1: 0,
      param2: 0,
      param3: 0,
      param4: 0,
      param5: 0,
    },
    onSubmit: async(values) => {
      setLoading(true);
      let res=await sendData(values);
      let da=await res.json();
      let val=Math.ceil(da['output'])
      setScore({Pscore:val});
      setLoading(false);
    },
  });
  const animationKeyframes = keyframes`
  0% { transform: scaleY(0.1); }
  25% {transform: scaleY(0.3);}
  50% {transform: scaleY(1);  }
  75% {transform: scaleY(0.3);  }
  100% {transform: scaleY(0.1); }
`;
const animation1 = `${animationKeyframes} 2s ease-in-out infinite`;
const animation2 = `${animationKeyframes} 1s ease-out infinite`;
const animation3 = `${animationKeyframes} 0.5s ease-in infinite`;
const animation4 = `${animationKeyframes} 3s ease-in-out infinite`;
const animation5 = `${animationKeyframes} 1.5s ease-out infinite`;
  return (
    <>
      <Score isOpen={isOpen} onClose={onClose} onOpen={onOpen} Score={score}/>
      <Head>
        <title>Song Predictor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack  direction={{ base: 'column-reverse', lg: "row" }} minH={'100vh'} gap={0}>
        <Flex
          bgColor={'#f997c8'}
          w={{ base: "100%",lg:'45vw' }}
          align={"center"}
          px={'2rem'}
          py={'2rem'}
          justify={"center"}
          direction={'column'}
        >
          <Flex w={'80%'} color={'black'} >
          
          <Carousel
          style={{wordBreak:'break-word',width:'100%'}}
            wrapAround
            autoplay
            cellAlign="left"
            slidesToShow={1}
            cellSpacing={0}
            animation='fade'
            renderBottomCenterControls={({ previousSlide,nextSlide }) => (
              <Box position={'relative'} top={'20'}>

              <Button bgColor={'transparent'} opacity={0.65} onClick={previousSlide}>
                <ArrowLeftIcon color={'black'}/>
              </Button>
              <Button bgColor={'transparent'} onClick={nextSlide} opacity={0.65} color={'black'}>
            <ArrowRightIcon />
          </Button>
              </Box>
            )}
        renderCenterLeftControls={ ({}) => (
          <></>
          )}
        renderCenterRightControls={({ }) => (
          <></>
        )}
      >

            <Stack gap={'2rem'} fontSize={{base:'medium',lg:'large'}} >
            <li><b>Energy:</b> Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.</li>
            <li><b>Tempo:</b> The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.</li>
            <li>
            <b>Valence:</b> A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
            </li>
            </Stack>
            <Stack gap={'2rem'} fontSize={'large'}>
            <li><b>Danceability:</b> Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</li>
            <li><b>Liveness:</b> Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live.</li>
            </Stack>
            </Carousel>
          </Flex>
        </Flex>

        <Flex
          boxShadow={
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
          }
          direction={'column'}
          m={0}
          w={{ base: "100%", lg: "60vw" }}
          justify={"center"}
          align={"center"}
          bgColor={'whitesmoke'}
        >
          <Text color={'black'} fontSize={'3xl'} fontWeight={'bold'}>Song Popularity</Text>
          <Text  color={'black'} fontSize={'3xl'} fontWeight={'bold'}>Predictor</Text>
          <Stack direction={'row'} gap={'0.1rem'} align={'center'}>
              <Box as={motion.div}  animation={animation1} w={'10px'} h={'20px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation2}  w={'10px'} h={'40px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation3}  w={'10px'} h={'70px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation4}  w={'10px'} h={'100px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation5}  w={'10px'} h={'120px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation1}  w={'10px'} h={'100px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation3}  w={'10px'} h={'70px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation4}  w={'10px'} h={'40px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation2}  w={'10px'} h={'20px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation1} w={'10px'} h={'20px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation2}  w={'10px'} h={'40px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation3}  w={'10px'} h={'70px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation4}  w={'10px'} h={'100px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation5}  w={'10px'} h={'120px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation1}  w={'10px'} h={'100px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation3}  w={'10px'} h={'70px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation4}  w={'10px'} h={'40px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
              <Box as={motion.div}  animation={animation2}  w={'10px'} h={'20px'} bgColor={'#d53c7e'} borderRadius={'50%'}></Box>
          </Stack>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <FormControl>
              <Stack spacing={"2rem"} align={"center"} color={'black'}>
                <NumberInput w={"60%"} isRequired>
                  <NumberInputField
                    borderColor={'ActiveBorder'}
                    name="param1"
                    onChange={formik.handleChange}
                    value={formik.values.param1}
                    placeholder="Energy"
                    _placeholder={{color:'black'}}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput  w={"60%"} isRequired>
                  <NumberInputField
                  borderColor={'ActiveBorder'}
                    name="param2"
                    onChange={formik.handleChange}
                    value={formik.values.param2}
                    placeholder="Tempo"
                    _placeholder={{color:'black'}}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput isRequired w={"60%"}>
                  <NumberInputField
                  borderColor={'ActiveBorder'}
                    name="param3"
                    onChange={formik.handleChange}
                    value={formik.values.param3}
                    placeholder="Valence"
                    _placeholder={{color:'black'}}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput isRequired w={"60%"}>
                  <NumberInputField
                  borderColor={'ActiveBorder'}
                    name="param4"
                    onChange={formik.handleChange}
                    value={formik.values.param4}
                    placeholder="Danceability"
                    _placeholder={{color:'black'}}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <NumberInput isRequired w={"60%"}>
                  <NumberInputField
                  borderColor={'ActiveBorder'}
                    name="param5"
                    onChange={formik.handleChange}
                    value={formik.values.param5}
                    placeholder="Liveness"
                    _placeholder={{color:'black'}}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button isLoading={loading} type="submit" bg={"peachpuff"}>
                  Predict!
                </Button>
              </Stack>
            </FormControl>
          </form>
        </Flex>
      </Stack>
    </>
  );
}

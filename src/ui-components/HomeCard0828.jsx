/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard0828(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1071px"
      height="430px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="30px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard0828")}
      {...rest}
    >
      <Image
        width="1071px"
        height="215px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1029px"
        height="39px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="257px"
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.id}
        {...getOverrideProps(overrides, "\u30BF\u30A4\u30C8\u30EB")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1027px"
        height="69px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="320px"
        left="23px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={home?.price}
        {...getOverrideProps(overrides, "\u5185\u5BB9")}
      ></Text>
    </View>
  );
}

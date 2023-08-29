/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCard0828OverridesProps = {
    HomeCard0828?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomeCard0828Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: HomeCard0828OverridesProps | undefined | null;
}>;
export default function HomeCard0828(props: HomeCard0828Props): React.ReactElement;

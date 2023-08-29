/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HomeCard0828Props } from "./HomeCard0828";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCard0828CollectionOverridesProps = {
    HomeCard0828Collection?: PrimitiveOverrideProps<CollectionProps>;
    HomeCard0828?: HomeCard0828Props;
} & EscapeHatchProps;
export declare type HomeCard0828CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HomeCard0828Props;
} & {
    overrides?: HomeCard0828CollectionOverridesProps | undefined | null;
}>;
export default function HomeCard0828Collection(props: HomeCard0828CollectionProps): React.ReactElement;

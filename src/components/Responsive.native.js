import React from "react";
import { View } from "react-native";

export const Responsive = ({ minWidth, maxWidth, ...props }) => (
	<View {...props} />
);
export const Desktop = props => <Responsive {...props} minWidth={992} />;
export const Tablet = props => (
	<Responsive {...props} minWidth={768} maxWidth={991} />
);
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Default = props => <Responsive {...props} minWidth={768} />;

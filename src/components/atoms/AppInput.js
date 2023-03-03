import React from "react";
import {
	TextInput,
	View,
	StyleSheet,
	Pressable,
	Image,
	Platform,
} from "react-native";

const AppInput = ({
	externalStyle,
	placeholder,
	placeholderTextColor,
	onPress,
	inputcontainerStyle,
	leftImage,
	rightImage,
}) => {
	return (
		<View style={[styles.container, externalStyle]}>
			<View style={[styles.inputcontainer, inputcontainerStyle]}>
				{leftImage && (
					<Pressable onPress={onPress}>
						<Image source={leftImage} style={styles.image} />
					</Pressable>
				)}
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor}
					multiline
				/>
				{rightImage && (
					<Pressable onPress={onPress}>
						<Image source={rightImage} style={styles.image} />
					</Pressable>
				)}
			</View>
		</View>
	);
};

export default AppInput;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
	},
	inputcontainer: {
		borderRadius: 45,
		borderColor: "black",
		borderWidth: 2,
		marginVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		minHeight: 40,
	},
	input: {
		textAlign: "left",
		paddingLeft: 15,
		maxHeight: 100,
		width: Platform.OS === "android" ? 300 : 280,
		paddingVertical: 5,
	},

	image: {
		width: 20,
		height: 20,
		paddingLeft: 35,
		resizeMode: "contain",
	},
});

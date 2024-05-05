import { Stack } from 'expo-router';

const StackLayout = () => {
	return (
		<Stack
      initialRouteName='index'
    >
			<Stack.Screen
				name="index"
			/>
			<Stack.Screen
				name="deep"
			/>
		</Stack>
	);
};

export const unstable_settings = {
	initialRouteName: 'index',
};

export default StackLayout;
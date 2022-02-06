import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
	Entypo,
	Ionicons,
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import Animated from 'react-native-reanimated'

import { MainColours, MainStyles } from '../../styles/core';
import CustomTextInput from './components/CustomTextInput';
import PanelButton from '../../components/PanelButton';
import ProfilePreviewContainer from './components/ProfilePreviewContainer';

import CustomDropDownInput from './components/CustomDropDownInput';
import usePickImage from '../../hooks/usePickImage';

const EditProfileScreen = ({ navigation }) => {
	const [gender, setGender] = useState("");
	const [preference, setPreference] = useState("");
	const [imageUri, setImageUri] = useState("https://avatars.githubusercontent.com/u/52676055?s=400&u=18d95ed91216e90edacde8a5b0c7ecb8399657b5&v=4")

	const { pickedImage, pickImage } = usePickImage();

	useEffect(() => {
		if (pickedImage) {
			setImageUri(pickedImage.uri);
		}
	}, [pickedImage])

	const genderList = [
		{
			label: "Hombre",
			value: "hombre",
		},
		{
			label: "Mujer",
			value: "mujer",
		},
		{
			label: "Otro",
			value: "otro",
		},
	];

	const fall = new Animated.Value(1)

	return (
		<KeyboardAwareScrollView
			extraScrollHeight={100}
		>
			<View style={MainStyles.fx1}>
				<ScrollView>
					<Animated.View style={{
						marginHorizontal: 20,
						marginTop: 10,
						marginBottom: 40,
						opacity: Animated.add(0.1, Animated.multiply(fall, 1))
					}}>
						<View style={MainStyles.alignCenter}>
							<ProfilePreviewContainer
								imageUri={imageUri}
								onPress={() => pickImage()}
							/>
						</View>

						<PanelButton
							text={'Editar fotos del perfil'}
							onPress={() => navigation.navigate('EditProfilePhotos')}
							style={{
								marginVertical: 15,
							}}
						/>

						<CustomTextInput
							icon={
								<Ionicons
									name='person-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Nombre completo'}
							initialText={'JUAN ALEJANDRO LOPEZ OJEDA'}
							disabled
						/>

						<CustomTextInput
							icon={
								<MaterialIcons
									name='elderly'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Fecha de nacimiento'}
							keyboardType={'numeric'}
						/>

						<CustomDropDownInput
							label={'Soy...'}
							value={gender}
							setValue={setGender}
							list={genderList}
							icon={
								<FontAwesome
									name='genderless'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
						/>

						<CustomDropDownInput
							label={'Busco a alguien que sea...'}
							value={preference}
							setValue={setPreference}
							list={genderList}
							icon={
								<FontAwesome
									name='genderless'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							multiSelect
						/>

						<CustomTextInput
							icon={
								<MaterialCommunityIcons
									name='city-variant-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Municipio de residencia'}
						/>

						<CustomTextInput
							icon={
								<FontAwesome
									name='envelope-o'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Correo universitario'}
							keyboardType={'email-address'}
							initialText={'juan.perezojd@uanl.edu.mx'}
							disabled
						/>

						<CustomTextInput
							icon={
								<FontAwesome
									name='university'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Facultad'}
							initialText={'FACULTAD DE INGENIERÍA MECÁNICA Y ELÉCTRICA'}
							multiline
							disabled
						/>

						<CustomTextInput
							icon={
								<Ionicons
									name='school-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Escolaridad'}
							initialText={'ALUMNOS SUPERIOR'}
							disabled
						/>

						<CustomTextInput
							icon={
								<Entypo
									name='book'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Semestre'}
							keyboardType={'numeric'}
						/>

						<CustomTextInput
							icon={
								<MaterialCommunityIcons
									name='script-text-outline'
									color={MainColours.textInputIconColor}
									size={MainStyles.iconSize}
									style={MainStyles.textInputIcon}
								/>
							}
							placeholder={'Bio'}
							style={{
								height: 140,
							}}
							multiline
							showRemainingCharacters
						/>

						<PanelButton
							text={'Enviar'}
							style={{
								marginTop: 15,
							}}
						/>

					</Animated.View>
				</ScrollView>
			</View>
		</KeyboardAwareScrollView>
	);
};

export default EditProfileScreen;
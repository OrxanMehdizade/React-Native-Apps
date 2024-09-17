import { StyledView, StyledText, StyledTouchableOpacity, } from '@common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';

const Register = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();

    const submitData = async () => {
        try{
            const response= await fetch('http://localhost:5000/api/users/register',{
              method:'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const data= await response.json();
            console(data)
            if (response.ok) {
              storage.set('accessToken', JSON.stringify(data));
              navigation.navigate('login');
            } else {
              setErrors(result.errors || {});
            }
          }catch(error){
            console.error('Error during register:', error);
          }
    };

    const handleInputChange = (inputName, inputValue) => {
        setFormData(prevState => ({ ...prevState, [inputName]: inputValue }));
    };

    return (
        <KeyboardAwareScrollView
            style={{ backgroundColor: 'white' }}
            contentContainerStyle={{ flex: 1 }}>
            <StyledView className="flex-1 bg-white items-center justify-center px-5">
                <StyledText className="text-3xl font-semibold mb-4">
                    Register
                </StyledText>

                <Input
                    inputName="name"
                    inputValue={formData?.name}
                    handleInputChange={handleInputChange}
                    placeholder="Enter name"
                    error={errors?.name}
                />

                <Input
                    inputName="surname"
                    inputValue={formData?.surname}
                    handleInputChange={handleInputChange}
                    placeholder="Enter surname"
                    error={errors?.surname}
                />

                <Input
                    inputName="about"
                    inputValue={formData?.about}
                    handleInputChange={handleInputChange}
                    placeholder="Write about yourself"
                    error={errors?.about}
                    multiline={true}
                    height={100}
                />

                <Input
                    inputName="email"
                    inputValue={formData?.email}
                    handleInputChange={handleInputChange}
                    placeholder="Enter email"
                    error={errors?.email}
                />

                <PasswordInput
                    inputName="password"
                    inputValue={formData.password}
                    handleInputChange={handleInputChange}
                    placeholder="Enter password"
                    error={errors?.password}
                />

                <StyledTouchableOpacity
                    onPress={submitData}
                    className="w-full py-5 bg-blue-700 mt-3 rounded-lg">
                    <StyledText className="text-center text-white">Submit</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                    className="w-full mt-5">
                    <StyledText className="text-center text-black">
                        Already have an account?
                    </StyledText>
                </StyledTouchableOpacity>
            </StyledView>
        </KeyboardAwareScrollView>
    );
};

export default Register;
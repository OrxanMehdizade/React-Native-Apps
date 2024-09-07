import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default login

const styles = StyleSheet.create({})













// import { useState } from 'react'
// import { StyledView, StyledTextInput, StyledText } from '../../common/StyledComponents';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [passwordVisible, setPasswordVisible] = useState(false)

//   useEffect(() => {
//     console.log(formData);
//   }, [formData])


//   return (
//     <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }} style={{ backgroundColor: 'white' }}>
//       <StyledView className='flex-1 bg-white items-center justify-center px-5'>
//         <StyledText className='text-3xl font-semibold mb-4'>Login</StyledText>
//         <StyledTextInput value={formData.email} onChangeText={value => { setFormData(prevState => ({ ...prevState, email: value })) }} placeholder='Enter your Email' className='w-full border border-zinc-300 p-3 rounded-lg bg-white shadow shadow-zinc-200' />

//         <StyledView className=' w-full border border-zinc-300 p-3 rounded-lg bg-white shadow shadow-zinc-200'>
//           <StyledTextInput value={formData.password} onChangeText={value => { setFormData(prevState => ({ ...prevState, password: value })) }} placeholder='Enter your Password' className='w-full p-3' />
//         </StyledView>

//         <StyledTouchableOpacity className="w-full py-5 bg-blue-700 mt-3">
//           <StyledText className='text-center text-white'>Submit</StyledText>
//         </StyledTouchableOpacity>
//       </StyledView>
//     </KeyboardAwareScrollView>

//   )
// }

// export default login;
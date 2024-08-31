import { StyledView,StyledText, StyledTouchableOpacity } from '@common/StyledComponents';
import { useState } from 'react';

const TaskCount = () => {
  const [count,setCount]=useState(0);

  
  return (
    <StyledView className="flex-1 items-center justify-center p-4 bg-gray-100">
    <StyledText className="text-3xl m-4 text-black">Count: {count}</StyledText>
    <StyledView className="flex-row">
      <StyledTouchableOpacity
        className="bg-blue-500 p-4 rounded-full mx-2"
        onPress={() => setCount(count + 1)}
      >
        <StyledText className="text-white text-xl p-2">+</StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="bg-red-500 p-4 rounded-full mx-2"
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            alert("Count sıfırdan kiçikdir");
          }
        }}
      >
        <StyledText className="text-white text-xl p-2">-</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  </StyledView>
  )
}

export default TaskCount
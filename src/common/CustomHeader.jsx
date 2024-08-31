import {StyledView, StyledText} from '@common/StyledComponents';
 
const CustomHeader = ({title}) => {
  return (
    <StyledView className={`w-full bg-slate-500 items-center justify-center`}>
      <StyledText className="text-white font-poppi-medium text-[20px] pb-5 pt-6">
        {title}
      </StyledText>
    </StyledView>
  );
};
 
export default CustomHeader;
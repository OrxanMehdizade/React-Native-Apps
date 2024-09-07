import { StyledText,StyledTouchableOpacity } from '@common/StyledComponents';
import { useNavigation } from '@react-navigation/native';

const InfoCard = ({ cardItem }) => {
    const navigation=useNavigation();

    return (
        <StyledTouchableOpacity onPress={
            ()=>{
                navigation.navigate('DetailsPage',{dataItems:cardItem})
            }
        } className="w-auto bg-slate-500 p-5 shadow-zinc-300 rounded-lg m-5">
            <StyledText className="mb-1 text-white font-semibold">
                {cardItem.name}
            </StyledText>
            <StyledText className="mb-1 text-white font-light">
                {cardItem.email}
            </StyledText>
            <StyledText className="text-white text-right ">
                {cardItem.company.name}
            </StyledText>
        </StyledTouchableOpacity>
    );
};

export default InfoCard;

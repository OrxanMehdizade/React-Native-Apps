import { StyledText, StyledView } from '@common/StyledComponents';

const InfoCard = ({ cardItem }) => {
    return (
        <StyledView className="w-auto bg-slate-500 p-5 shadow-zinc-300 rounded-lg m-5">
            <StyledText className="mb-1 text-white font-semibold">
                {cardItem.name}
            </StyledText>
            <StyledText className="mb-1 text-white font-light">
                {cardItem.email}
            </StyledText>
            <StyledText className="text-white text-right ">
                {cardItem.company.name}
            </StyledText>
        </StyledView>
    );
};

export default InfoCard;

import Layout from '../../common/Layout'
import { useRoute } from '@react-navigation/native'
import { StyledText, StyledView } from '../../common/StyledComponents';

const DetailsPage = () => {
    const route = useRoute();
    const { dataItems } = route.params;
    console.log(dataItems);
    return (
        <Layout title="DetailsPage">
            <StyledView className="p-4 rounded-lg bg-white shadow shadow-zinc-300 mb-4">
                <StyledText className="font-bold text-lg mb-2">User info</StyledText>

                <StyledText>{dataItems.name}</StyledText>
                <StyledText>{dataItems.phone}</StyledText>
                <StyledText>{dataItems.email}</StyledText>
                <StyledText>{dataItems.website}</StyledText>
            </StyledView>

            <StyledView className="p-4 rounded-lg bg-white shadow shadow-zinc-300 mb-4">
                <StyledText className="font-bold text-lg mb-2">Adress</StyledText>

                <StyledText>{dataItems.address.city}</StyledText>
                <StyledText>{dataItems.address.street}</StyledText>
                <StyledText>{dataItems.address.suite}</StyledText>
            </StyledView>

            <StyledView className="p-4 rounded-lg bg-white shadow shadow-zinc-300 mb-4">
                <StyledText className="font-bold text-lg mb-2">Company</StyledText>

                <StyledText>{dataItems.company.name}</StyledText>
                <StyledText>{dataItems.company.catchPhrase}</StyledText>
            </StyledView>
        </Layout>
    )
}

export default DetailsPage;

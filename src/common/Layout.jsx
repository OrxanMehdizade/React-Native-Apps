import { StyledView } from '@common/StyledComponents';
import CustomHeader from './CustomHeader'

const Layout = ({ children, title }) => {
    return (
        <>
            <CustomHeader title={title} />
            <StyledView className="flex-1 p-4">
                {children}
            </StyledView>
        </>
    );
};

export default Layout

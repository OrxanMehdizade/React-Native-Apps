import Layout from '../../common/Layout'
import { StyledText, StyledTouchableOpacity } from '../../common/StyledComponents'
import { storage } from '@utils/MMKVStorage';

const Profile = () => {
  return (
    <Layout title="Profile">
      <StyledTouchableOpacity
        className="w-auto bg-red-600 p-4 m-4 rounded-x1"
        onPress={() => {
          storage.delete('accessToken');
        }}>
        <StyledText className="text-white text-center text-2x1">
          Logout
        </StyledText>
      </StyledTouchableOpacity>
    </Layout>
  )
}

export default Profile

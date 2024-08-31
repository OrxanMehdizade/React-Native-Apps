import { useEffect, useState } from 'react';
import TaskCount from '@components/TaskCount';
import InfoCard from '@components/InfoCard';
import Layout from '@common/Layout';
import NoData from '@components/NoData';
import { FlatList } from 'react-native';


const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      const newData = await response.json();

      setData(newData);
    }
    fetchData();
  }, []);


  return (
    <Layout title="Home">
      {/* <TaskCount /> */}

      {/* {data.map((item) => (
        <InfoCard key={item.id} cardItem={item} />
      ))} */}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex:1}}
        data={data}
        renderItem={({item}) => <InfoCard cardItem={item}/>}
        ListEmptyComponent={()=><NoData/>}
      />
    </Layout>

  );
};

export default Homepage;


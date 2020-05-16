import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import {StyleSheet} from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [gdata, setGdata] = useState([]);
  const [newsdata, setNdata] = useState([]);
  

  useEffect(() => {
  fetch('https://api.covid19api.com/summary')
      .then((response) =>response.json())
      .then((json) =>{
        setData(json.Countries[177]);
        setGdata(json.Global);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

      fetch('http://newsapi.org/v2/top-headlines?country=us&pageSize=5&q=corona&apiKey=78fcfa91c1664bd0828c5d064347cbb9')
      .then((response) =>response.json())
      .then((json) =>{
        setNdata(json.articles);
      });
      
  }, []);


    

  return (
    
     <View style={{marginTop: 30, flex:1}} >
     <View style={USReportStyles.USAReportContainer}>
          <Text style={USReportStyles.titleUSAReport}>
            Global Report
          </Text>
          <Text style={USReportStyles.dateUSAReport}>
            Date{' '}
            {data.Date}
          </Text>
          <View style={USReportStyles.statusContainer}>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Total
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {gdata.TotalConfirmed}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Deaths
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {gdata.TotalDeaths}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
            Recoverd
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {gdata.TotalDeaths}
              </Text>
            </View>
          </View>
        </View>
        <View style={USReportStyles.USAReportContainer}>
          <Text style={USReportStyles.titleUSAReport}>
            United States Report
          </Text>
          <Text style={USReportStyles.dateUSAReport}>
            Date{' '}
            {data.Date}
          </Text>
          <View style={USReportStyles.statusContainer}>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Total
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalConfirmed}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Deaths
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalDeaths}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
            Recoverd
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalDeaths}
              </Text>
            </View>
          </View>
        </View>
        <View style={USReportStyles.USAReportContainer} >
         <Text style={USReportStyles.titleUSAReport}>
            News
          </Text>
        <FlatList
        data={newsdata}
        renderItem={({item}) =>( <Text style={USReportStyles.item}>{item.title}</Text>)} />
        </View>
     </View>
    
  );
}


const USReportStyles = StyleSheet.create({
  USAReportContainer: {
    flex:1,
    marginTop:10 ,
    flexWrap: 'wrap',
    padding: 14,
    backgroundColor: '#AC5555',
    borderRadius: 10,
  },
  titleUSAReport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateUSAReport: {
    fontSize: 14,
    color: 'white',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  itemStatusContainer: {
    height:60,
    width: 100,
    backgroundColor: '#e18381',
    padding: 4,
  },
  numItemStatus: {
    textAlign: 'center',
    fontSize: 20,
  },
  textItemStatus: {
    textAlign: 'center',
  },
   item: {
    flex: 1,
    marginHorizontal: 3,
    marginTop: 3,
    padding: 3,
    fontSize: 20,
  },
});



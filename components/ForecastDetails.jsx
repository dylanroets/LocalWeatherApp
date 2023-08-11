import {
    View,
    Text,
    Image
} from 'react-native';

export default function ForecastDetails({route}) {
    
    const imageUrl = route.params.icon
    console.log('specific url', imageUrl);
    
    return (
        <View>
            <Text>{route.params.name} {route.params.temperature}{route.params.temperatureUnit} </Text>
            <Text>{route.params.detailedForecast}</Text>
            <Image source={{uri: imageUrl}} style={{ height: 100, width: 100}}/>
            <Text>{route.params.shortForecast}</Text>
        </View>
    )
}
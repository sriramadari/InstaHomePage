import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function MyTabs({ state, descriptors, navigation }) {
  return (
    <View style={{ flex:0, flexDirection: 'row' ,justifyContent:'space-between',paddingVertical:22,paddingHorizontal:35,alignItems:'center',backgroundColor:'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity key={index}
            // accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{  }}
          >
            
                
                <Icon onPress={onPress} onLongPress={onLongPress}  style={{ color: isFocused ? 'black' : 'grey' }} size={30} name={label=="Home" ? "home" : label=="Search" ? "search" : label=="Post" ? "plus-square-o" : label=="Reels" ? "video-camera" : label=="Profile" ? "user": ""} />
            
              
        
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabs
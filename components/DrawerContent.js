import { useTheme, Avatar, Title, Caption, Paragraph, Drawer,
    Text, TouchableRipple, Switch,
} from 'react-native-paper';
import React,{useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import {DrawerItem, createDrawerNavigator,
    DrawerScrollView,
    DrawerContentScrollView} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {AuthContext} from './context'

 const DrawerContent = (props) => {

    const theme = useTheme();

    const {signOut,toggleTheme} = useContext(AuthContext)

    return(
        <DrawerContentScrollView {...props} style={{flex:1,flexDirection:"row",}}>
            <View style={{flex: 1,}}>
                <View style={{padding:20,}}>
                    <Avatar.Image 
                        source={{
                            uri:
                                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                        size={50}
                    />
                    <Title style={styles.Title}>Davut Milan</Title>
                    <Caption style={styles.Caption}>@davaro</Caption>

                    <View style={{marginTop: 20,flexDirection:"row",alignItems:"center"}}>
                        <View style={styles.Section}>
                                <Paragraph style={styles.Paragraph,styles.Caption}>
                                    202
                                </Paragraph>
                                <Caption style={styles.Caption}> Following</Caption>
                        </View>
                        <View style={styles.Section}>
                                <Paragraph style={styles.Paragraph,styles.Caption}>
                                    156
                                </Paragraph>
                                <Caption style={styles.Caption}> Followers</Caption>
                        </View>
                    </View>
                    <Drawer.Section style={styles.DrawerSection}>
                        <DrawerItem 
                            label="Profil"
                            icon={({color,size}) => (<Icon    name="account-outline"
                                                            color={color}
                                                            size={size}/>)}
                            onPress={() => {}}
                        />
                        <DrawerItem 
                            label="Prefences"
                            icon={({color,size}) => (<Icon    name="tune"
                                                            color={color}
                                                            size={size}/>)}
                            onPress={() => {}}
                        />
                        <DrawerItem 
                            label="BookMarks"
                            icon={({color,size}) => (<Icon    name="bookmark-outline"
                                                            color={color}
                                                            size={size}/>)}
                            onPress={() => {}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Prefrence">
                        <TouchableRipple onPress={toggleTheme}>
                            <View style={styles.preference}>
                                <Text >Dark Theme</Text>
                                <View pointerEvents="none" >
                                    <Switch value={theme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() =>{}}>
                            <View style={styles.preference}>
                                <Text >RTL</Text>
                                <View pointerEvents="none" >
                                    <Switch value={false} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
                
       

            </View>
            <View>

            <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem 
                                label="Sign out"
                                icon={({color,size}) => (<Icon    name="exit-to-app"
                                                                color={color}
                                                                size={size}/>)}
                                onPress={() => {signOut()}}
                            />
            </Drawer.Section>
            </View>

        </DrawerContentScrollView>
    )
    
}

export default DrawerContent

const styles = StyleSheet.create({
    Title:{
        marginTop: 20,
        fontWeight:"bold"
    },
    Caption:{
        fontSize:14,
        lineHeight:20,
    },
    Paragraph:{
        fontWeight:"bold",
        marginRight:3
    },
    Section:{
        marginRight:15,
        flexDirection:"row",
        alignItems:"center"
    },
    DrawerSection:{
        marginTop:15,
    },
    preference:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:16,
        paddingVertical:12,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
})

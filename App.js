import React from "react";
 import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Src/Screen/Home";
import About from "./Src/Screen/About";
import Contact from "./Src/Screen/Contact";
import Course from "./Src/Screen/Course";
import UserData from "./Src/Screen/UserData";
import CourseDetails from "./Src/Screen/CourseDetails";


export default function App() {
 const Stack = createNativeStackNavigator();

   return (
   
    <NavigationContainer theme={DarkTheme}>
        
       <Stack.Navigator initialRouteName="Home">
         {/* home screen  */}
       <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {(props) => <Home {...props} channelName={"India Youth Care"} />}
        </Stack.Screen>

        {/* Course Screen  */}
         <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
          
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* UserData Screen  */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
          
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />

        {/* About Screen  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,

            },
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen  */}
         <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,

            },
            headerTitleAlign: "center",
          }}
        />

        {/* CourseDetails Screen  */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,

            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
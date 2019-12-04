import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DailyWorkoutForm from './screens/DailyWorkoutForm';
import WorkoutList from './screens/WorkoutList';
import CreateWorkoutWizard from './screens/CreateWorkoutWizard';

const RootStack = createStackNavigator(
  {
    WorkoutList: WorkoutList,
    DailyWorkoutForm: DailyWorkoutForm,
    CreateWorkoutWizard: CreateWorkoutWizard,
  },
  {
    initialRouteName: 'WorkoutList',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRightContainerStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  return <AppContainer />;
};
export default App;

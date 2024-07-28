import BackgroundTask from 'react-native-background-task';
import { AppRegistry } from 'react-native';
import { Linking } from 'react-native';

// Define your background task
BackgroundTask.define(async () => {
    // Do the background work here

    // If you want to open the app, you can use the Linking API
    Linking.openURL('myapp://home'); // Adjust this URL to your app's schema and route

    // This is required to prevent the app from being killed
    BackgroundTask.finish();
});

// Schedule the background task
BackgroundTask.schedule({
    period: 900, // Repeat every 15 minutes (minimum allowed by iOS)
});

// Register the task with React Native
AppRegistry.registerHeadlessTask('BackgroundTask', () => BackgroundTask);

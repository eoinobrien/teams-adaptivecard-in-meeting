1. Start ngrok pointing it at 3000
    * `ngrok http -host-header=rewrite 3000`
1. Install the react app dependencies
    * `cd tabs && npm install`
1. Start the react app
    * `npm start`
1. Update the `<<ngrok-url>>` in the manifest file (`./manifest`) to that from the started ngrok instance above
1. Zip the contents of manifest
1. Add the app to a meeting
1. Add the app tab to the meeting
1. In the pre meeting flow open the dialog, and click on the 'Ok' button to submit
    * Note the returned object is of type `object`
1. Join the meeting, and open the tab in the side panel. Again, open and submit the dialog.
    * Note the returned object is of type `string`
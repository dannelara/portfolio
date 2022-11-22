interface Data {
  title: string;
  code: string;
  languague: String;
}

const data: Data[] = [
  {
    title: "Arduino based temperature sensor",
    code: `#include <ArduinoLowPower.h>
        #include <Base64.h>
        #include <WiFiSSLClient.h>
        
        // Func to connnect to wifi.
        void connectWifi(){
        
         while (WiFi.begin(ssid, password) != WL_CONNECTED) {
           Serial.print(".");
           // Set wifi to low power mode.
           WiFi.lowPowerMode();
           delay(500);
         }
         Serial.println("");
         Serial.println("WiFi connected");
          }
        
        
        
        // Func to send message to api.
        void send_message(String waring) {
          // Make sure connection is closed before initiating a new one.
         client.stop();
          // Check wifi status. If disconnected, connect to it.
          if (WiFi.status() != WL_CONNECTED) {
             connectWifi();
            }
         // Get all information needed.
           String _temperature = String(get_temperature());
           String _warning = waring;
           String authString = getAuthToken();
        
           // Connect to host.
         if (client.connect(host, 443)) {
           client.println("POST "+url+"?"+"temp="+_temperature+"&warning="+_warning+" HTTP/1.1");
        
           client.println("Authorization: Basic " + authString);
           client.println("Host: " + String(host));
           client.println("Connection: close");
        
           client.println();
           delay(1000);
           while (client.available()) { // Print answer from the request.
             char c = client.read();
             Serial.write(c);
           }
           client.stop();  // Disconnect from the server
        
           Serial.println("Message sent");
         }
         else {
           Serial.println("Failed to connect to client - message");
         }
        }
        
        
        // Func to get temperature in celsius format.
        float get_temperature() {
         int reading = analogRead(tempPin);
         float voltage = reading * 3.3;
         voltage /= 1023.0;
         float temperatureC = (voltage - 0.5) * 100 ; //converting to C.
         return temperatureC;
        }`,
    languague: "C++",
  },
];

export default data;

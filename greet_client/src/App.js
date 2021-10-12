import { useEffect, useState } from 'react';
import './App.css';
import * as grpcWeb from 'grpc-web';
import { GreetRequest, GreetResponse } from './greetpb/greet_pb'
import { GreetServiceClient } from './greetpb/greet_grpc_web_pb'

function App() {
  let greetServiceClient = new GreetServiceClient('http://localhost:8000')

  const request = new GreetRequest()
  request.setFirstName("Andrii")
  request.setLastName("Bednarchuk")
  const [response, setResponse] = useState('')
  useEffect(() => {
    greetServiceClient.greet(request, {}, (err, res) => {
      try {
        console.log(err)
        console.log(res)
      } catch (err) { }
    })
  }, [])
  return (
    <div>
    </div>
  );
}

export default App;

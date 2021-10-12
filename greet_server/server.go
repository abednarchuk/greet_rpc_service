package main

import (
	"context"
	"fmt"
	"greet_server/greetpb"
	"log"
	"net"

	"google.golang.org/grpc"
)

type server struct {
	greetpb.UnimplementedGreetServiceServer
}

func (*server) Greet(ctx context.Context, req *greetpb.GreetRequest) (*greetpb.GreetResponse, error) {
	fmt.Println("Greet func was invoker with req: ", req)
	firstName := req.GetFirstName()
	lastName := req.GetLastName()
	result := fmt.Sprintf("Hello, %s %s!", firstName, lastName)
	greetResponse := &greetpb.GreetResponse{
		Result: result,
	}

	return greetResponse, nil
}

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalln(err)
	}

	s := grpc.NewServer()
	greetpb.RegisterGreetServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalln(err)
	}
}

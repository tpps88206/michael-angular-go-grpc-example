package main

import (
	"log"
	"net"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"./proto"
)

type server struct{}

func (s *server) Plus(ctx context.Context, in *proto.CalcRequest) (*proto.CalcReply, error) {
	result := in.NumberA + in.NumberB
	return &proto.CalcReply{Result: result}, nil
}

func main() {
    log.Printf("Start gRPC server")

	lis, err := net.Listen("tcp", "0.0.0.0:50051")
	if err != nil {
		log.Fatalf("Can not listen the port：%v", err)
	}

	s := grpc.NewServer()

	proto.RegisterCalculatorServer(s, &server{})

	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Can not provide service：%v", err)
	}
}

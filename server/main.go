package main

import (
	"./proto"
	"crypto/tls"
	"crypto/x509"
	"google.golang.org/grpc/credentials"
	"io/ioutil"
	"net"

	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"log"
)

type server struct{}

func (s *server) Plus(ctx context.Context, in *proto.CalcRequest) (*proto.CalcReply, error) {
	result := in.NumberA + in.NumberB
	return &proto.CalcReply{Result: result}, nil
}

func main() {
	log.Printf("Start gRPC server")

	// Load the client certificates from disk
	crt, err := tls.LoadX509KeyPair("./ssl/crt.pem", "./ssl/key.pem")
	if err != nil {
		log.Fatalf("Could not load client key pair：%v", err)
	}

	// Create a certificate pool from the certificate authority
	certPool := x509.NewCertPool()
	ca, err := ioutil.ReadFile("./ssl/ca.pem")
	if err != nil {
		log.Fatalf("Could not read ca certificate：%v", err)
	}

	// Append the certificates from the CA
	if ok := certPool.AppendCertsFromPEM(ca); !ok {
		log.Fatalf("Failed to append ca certs")
	}

	// Create the channel to listen on
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Can not listen the port：%v", err)
	}

	// Create the TLS credentials
	creds := credentials.NewTLS(&tls.Config{
		ClientAuth:   tls.RequireAndVerifyClientCert,
		Certificates: []tls.Certificate{crt},
		ClientCAs:    certPool,
	})

	s := grpc.NewServer(grpc.Creds(creds))

	proto.RegisterCalculatorServer(s, &server{})

	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("Can not provide gRPC service：%v", err)
	}
}

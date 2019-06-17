package main

 import (
	"log"

 	"golang.org/x/net/context"
	"google.golang.org/grpc"

 	"../proto"
)

 func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Connect failed：%v", err)
	}
	defer conn.Close()

 	c := proto.NewCalculatorClient(conn)

 	r, err := c.Plus(context.Background(), &proto.CalcRequest{NumberA: 1, NumberB: 2})
	if err != nil {
		log.Fatalf("Can not execute function：%v", err)
	}
	log.Printf("Result：%d", r.Result)
}

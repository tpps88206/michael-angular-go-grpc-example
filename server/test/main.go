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
		log.Fatalf("連線失敗：%v", err)
	}
	defer conn.Close()

 	c := proto.NewCalculatorClient(conn)

 	r, err := c.Plus(context.Background(), &proto.CalcRequest{NumberA: 1, NumberB: 2})
	if err != nil {
		log.Fatalf("無法執行 Plus 函式：%v", err)
	}
	log.Printf("回傳結果：%d", r.Result)
}

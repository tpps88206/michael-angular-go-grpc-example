# angular-go-grpc-example

The example of gRPC project with Angular and Go.

## Development using

* Angular 8.0.0
* Go 1.12
* Protocol Buffers 3.7.1


## Installation

Use Docker Compose to build client, server and proxy together.

    docker-compose build


## Usage

Run client, server and proxy together.

    docker-compose up
    
## Access path

Client site with Angular:

    http://localhost:80/

Server site with Go:

    http://localhost:50051/

Access the Envoy Proxy at:

    http://localhost:8080/

## Protocol Buffers

If you need to modify .proto files, you can go to `./proto` and then you will need to compile them again.

    cd proto
    vim calc.proto
    
    # After modify
    cd ..
    sh ./protoc.sh
    
## Client development mode

The Docker Image will build client with production mode. If you need to use development mode.

    cd ./client
    npm start
    
And the client access path is

    http://localhost:4200/

## Testing endpoints

If you want to try your server endpoint without client and proxy.

    cd ./server/test
    go run main.go

## Reference

* https://github.com/kmturley/angular-nest-grpc
* https://github.com/easyCZ/grpc-web-hacker-news
* https://github.com/improbable-eng/grpc-web
* https://github.com/protocolbuffers/protobuf
* https://github.com/envoyproxy/envoy
* https://github.com/appleboy/docker-multi-stage-build
* https://grpc.io/blog/state-of-grpc-web/
* https://blog.envoyproxy.io/envoy-and-grpc-web-a-fresh-new-alternative-to-rest-6504ce7eb880
* http://www.servicemesher.com/envoy/start/sandboxes/grpc_bridge.html

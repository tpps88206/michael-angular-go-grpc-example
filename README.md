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

    http://localhost:4200/

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

You can find out more information about gRPC requests and generated client-side code here:

    


## Exploring and testing endpoints

Install grpc_cli using:

    brew tap grpc/grpc
    brew install --with-plugins grpc

Then view the endpoints using:

    export GRPC_VERBOSITY=DEBUG
    grpc_cli ls localhost:50051
    grpc_cli call localhost:50051 FindOne "id: 1" --protofiles=backend/src/hero/hero.proto


## Directory structure

    /backend                               --> Backend source files
    /frontend                              --> Frontend sources files


## Reference

https://github.com/improbable-eng/grpc-web/blob/master/client/grpc-web/docs/code-generation.md


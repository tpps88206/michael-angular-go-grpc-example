protoc \
    --go_out=plugins=grpc:./server \
    --plugin=protoc-gen-ts=./client/node_modules/.bin/protoc-gen-ts \
    --ts_out=service=true:./client/src/app \
    --js_out=import_style=commonjs,binary:./client/src/app \
    ./proto/calc.proto

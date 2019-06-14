# build stage
FROM golang:alpine AS build-env
RUN apk update && apk upgrade && apk add --no-cache bash git openssh
ADD . /src
RUN go get -u google.golang.org/grpc
RUN go get -u golang.org/x/net/context
RUN go get -u github.com/golang/protobuf/proto
RUN cd /src && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app

# final stage
FROM centurylink/ca-certs
COPY --from=build-env /src/app /
ENTRYPOINT ["/app"]

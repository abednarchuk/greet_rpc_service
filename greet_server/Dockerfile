FROM golang:1.17.2

WORKDIR /greet_backend

COPY . .

RUN go mod tidy

EXPOSE 50051

CMD [ "go","run","server.go" ]
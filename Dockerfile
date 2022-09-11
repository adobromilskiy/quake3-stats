FROM golang:1.19 AS builder
ADD . /build
WORKDIR /build
RUN cd app && go build -v -race -mod=vendor -o /app
FROM ubuntu
COPY --from=builder /app /app
ENTRYPOINT [ "/app" ]
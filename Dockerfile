FROM alpine:3.7
ADD ./build/bin /bin
ENTRYPOINT ["/bin/code-annotation"]

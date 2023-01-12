npx -p protobufjs-cli pbjs \
  -w es6 \
  -t static-module \
  --keep-case \
  -o src/protobuf/protobuf.js \
  live_protocol_dealer/*.proto && \
npx -p protobufjs-cli pbts \
  --main \
  -o src/protobuf/protobuf.d.ts \
  src/protobuf/protobuf.js 
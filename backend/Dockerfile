FROM alpine:3.7 as SystemOS
RUN mkdir -p /data/db /data/configdb \
	&& apk add --no-cache mongodb \
	&& apk add --no-cache nodejs nodejs-npm
EXPOSE 8080

FROM SystemOS 
COPY './mongo_initial_script.js' /data/mongo_initial_script.js
COPY './package.json' '/app/package.json'
COPY './src/' '/app/src/'
RUN mongod --bind_ip 0.0.0.0 & \
	sleep 10 \
	&& mongo --eval "load('/data/mongo_initial_script.js');" \
	&& mongod --shutdown \
	&& cd app \
	&& npm i

CMD cd app && npm run prod & mongod --auth --bind_ip 0.0.0.0
FROM alpine:3.7 as SystemOS
RUN mkdir -p /data/db /data/configdb \
	&& apk add --no-cache mongodb \
	&& apk add --no-cache nodejs nodejs-npm
EXPOSE 27017
EXPOSE 3003

FROM SystemOS 
COPY './mongo_initial_script.js' /data/mongo_initial_script.js
RUN mongod --bind_ip 0.0.0.0 & \
	sleep 10 \
	&& mongo --eval "load('/data/mongo_initial_script.js');" \
	&& mongod --shutdown

CMD ["mongod", "--auth", "--bind_ip", "0.0.0.0"]
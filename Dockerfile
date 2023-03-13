FROM node:lts-alpine3.16

RUN apk update && apk add --no-cache \
	bash \
	shadow \
	git \
	curl \
	openssh-client

ARG UID=1000
ARG GID=1000

RUN groupmod -g "${GID}" node 2>&1 > /dev/null || echo "Group already exist"
RUN usermod -u "${UID}" -g "${GID}" node

USER node

WORKDIR /home/node/

CMD ["sleep", "infinity"]

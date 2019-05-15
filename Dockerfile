FROM circleci/node:10.15.3-browsers

USER circleci

ARG APP=/home/circleci/app

RUN mkdir -p $APP && chown -R circleci:circleci $APP

ADD . $APP
WORKDIR $APP

ARG INSTALL_DEP=true

# Set local node_modules binaries directly available
ENV PATH /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/app/node_modules/.bin

RUN if [ -n "$INSTALL_DEP" ]; then \
       npm install --no-optional --verbose; \
    fi;

EXPOSE 443

CMD npm run dev

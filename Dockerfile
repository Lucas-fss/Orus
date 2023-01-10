FROM ubuntu:latest
WORKDIR /app
RUN apt-get update && apt-get install \
    && apt-get install build-essential clang libdbus-1-dev libgtk-3-dev -y\
                       libnotify-dev libasound2-dev libcap-dev \
                       libcups2-dev libxtst-dev \
                       libxss1 libnss3-dev gcc-multilib g++-multilib curl \
                       gperf bison python3-dbusmock openjdk-8-jre \
    && apt-get install nodejs -y\
    && apt-get install npm -y\
    && npm install --save-dev electron \
    && xhost local:root

CMD npm start
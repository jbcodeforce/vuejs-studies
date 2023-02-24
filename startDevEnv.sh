#!/bin/bash
image=$(docker ps | grep jbcodeforce/nodejs)

if [[ -z $image ]]
then
    echo present
else
    echo build it
    docker build -f DockerfileForNode -t jbcodeforce/nodejs:latest .
fi

docker run -ti  -p 3000:3000 -p 5173:5173 -p 4173:4173 -v $(pwd):/app jbcodeforce/nodejs bash
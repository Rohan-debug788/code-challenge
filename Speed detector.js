let speed=141
if (speed<=70){
    console.log("ok");
}

// for every 5 km/s above the speed limit (70) the driver should get 1 demerit points

else if (speed>=70 && speed <=75){
    console.log("Points:1");
}
else if (speed>=75 && speed <=80){
    console.log("Points:2");
}
else if (speed>=80 && speed<=85){
    console.log("Points:3");
}
else if (speed>=85 && speed<=90){
    console.log("Points:4");
}
else if (speed>=90 && speed<=95){
    console.log("Points:5");
}
else if (speed>=95 && speed<=100){
    console.log("Points:6");
}
else if (speed>=100 && speed<=105){
    console.log("Points:7");
}
else if (speed>=105 && speed<=110){
    console.log("Points:8");
}
else if (speed>=110 && speed<=115){
    console.log("Points:9");
}
else if (speed>=115 && speed<=120){
    console.log("Points:10");
}
else if (speed>=120 && speed<=125){
    console.log("Points:11");
}
else if (speed>=125 && speed<=130){
    console.log("Points:12");
}

// If the driver gets more than 12 points, his license will be suspended

else {
    console.log("License Suspended")
}
console.log();
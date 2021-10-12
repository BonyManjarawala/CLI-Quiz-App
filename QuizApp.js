const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
console.log("Welcome to the Fun Game OF Life of pie \n")
var name = "";
rl.question("Enter Your Name: ",(nm)=>{
    name = nm;
    console.log("Welcome "+ name+"\n");
    quiz();
});

var i = 0;
var score = 0;
const que = ["Pi’s father runs the","Pi’s father teaches him and his brother, Ravi, a lesson about wild animals by","Who is  Pi has a special affinity for his ","Richard Parker is"];
const opt = [["Pondicherry drug store","Pondicherry Zoo","Pondicherry Circus","Pondicherry veterinary clinic"],["playing a video tape of a lion circus stunt gone wrong","feeding a wild goat to a tiger","throwing fish into a shark tank","showing them a scar he received from a hyena"],["yarmulke","Bible","Prayer beads","Prayer mat"],["A house pet","A tiger","Pi’s uncle","The ship’s captain"]];

var quiz = ()=>{
    if(i === 0){
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        rl.question("Answer:- ",(ans)=>{
            if(ans === "2")
            {
                score += 5;
                console.log("Great Job "+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
                console.log("Sorry Wrong answer! "+"\nRight answer is ->"+ opt[i][1]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 1)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        rl.question("Answer:- ",(ans)=>{
            if(ans === "2")
            {
                score += 5;
                console.log("Great Job "+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer "+"\nRight answer is ->"+ opt[i][1]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 2)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        rl.question("Answer:- ",(ans)=>{
            if(ans === "4")
            {
                score += 5;
                console.log("Great Job"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer "+"\nRight answer is ->"+ opt[i][3]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 3)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        rl.question("Answer:- ",(ans)=>{
            if(ans === "2")
            {
                score += 5;
                console.log("Great Job "+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer "+"\nRight answer is ->"+ opt[i][1]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else
    {
        console.log("Final Score Of "+name+": "+ score+"/"+(que.length*5));
        rl.close();
    }
}